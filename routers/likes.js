const express = require ('express')
const { Router } = express
const Stories = require("../models").story;
const User = require("../models").user;
const Like = require("../models").like;
const authMiddleware = require("../auth/middleware");
const router = new Router()

router.post("/", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  const {storyId, userId} = req.body

  await Like.create({userId, storyId})

  const storiesWithNewLikes = await Stories.findAll({
    include: [User],
    order: [["createdAt", "DESC"]]
  })

  res.status(200).send({ stories: storiesWithNewLikes });
});

module.exports = router