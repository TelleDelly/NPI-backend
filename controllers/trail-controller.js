const { Router } = require('express')
const express = require('express')
const trailRouter = express.Router()

const Trail = require('../models/trail-model.js')

trailRouter.get('/', (req, res) => {
    Trail.find({})
    .then((trails) => res.json())
    .catch(console.error)
})

module.exports = trailRouter