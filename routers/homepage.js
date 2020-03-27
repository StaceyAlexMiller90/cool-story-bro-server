const express = require ('express')
const { Router } = express
const Homepage = require("../models").homepage;
const Stories = require("../models").story;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const homepages = await Homepage.findAll()
    res.json(homepages)
  } catch (e) {
    next(e)
  }
})

router.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id)
  try {
    const homepages = await Homepage.findByPk(id, {
      include: { model: Stories, include: [User] },
      order: [[Stories, "createdAt", "DESC"]]
    })
    !homepages ? res.status(404).send('No homepage found') : res.json(homepages)
  } catch (e) {
    next(e)
  }
})

router.patch("/:id", authMiddleware, async (req, res, next) => {
  const id = parseInt(req.params.id)
  try {
    const homepageToUpdate = await Homepage.findByPk(id)
    const newHomepage = await homepageToUpdate.update(req.body)
    res.json(newHomepage)
  } catch (e) {
    next(e)
  }
})


router.post("/:id/stories", authMiddleware, async (req, res, next) => {
  const {name, content, imageUrl, homepageId} = req.body
  try {
    const newStory = await Stories.create({
      name,
      content,
      imageUrl,
      homepageId
    })

    res.json({newStory, users: []})
  } catch (e) {
    next(e)
  }
})

module.exports = router