const express = require ('express')
const { Router } = express

const Homepage = require("../models").homepage;
const Stories = require("../models").story;

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
      include: [Stories],
      order: [[Stories, "createdAt", "DESC"]]
    })
    !homepages ? res.status(404).send('No homepage found') : res.json(homepages)
  } catch (e) {
    next(e)
  }
})

module.exports = router