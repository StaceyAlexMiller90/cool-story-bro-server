const express = require ('express')
const { Router } = express
const Stories = require("../models").story;
const User = require("../models").user;
const Like = require("../models").like;
const authMiddleware = require("../auth/middleware");
const router = new Router()

router.post("/", authMiddleware, async (req, res) => {

  const {storyId, userId} = req.body

  await Like.create({userId, storyId})

  const storiesWithNewLikes = await Stories.findAll({
    include: [User],
    order: [["createdAt", "DESC"]]
  })

  res.status(200).send({ stories: storiesWithNewLikes });
});

router.delete("/", authMiddleware, async (req, res) => {

  const {storyId, userId} = req.body

  const likeToDelete = await Like.findOne({
    where: {userId, storyId}
  })

  console.log("like to delete", likeToDelete)

  await likeToDelete.destroy()

  const storiesWithoutLike = await Stories.findAll({
    include: [User],
    order: [["createdAt", "DESC"]]
  })

  res.status(200).send({ stories: storiesWithoutLike });
});

module.exports = router