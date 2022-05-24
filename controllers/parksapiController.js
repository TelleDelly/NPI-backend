const express = require('express')
const { Router } = require('express')
const parksRouter = express.Router()
const parksData = require('../models/data.json')



parksRouter.get('/home', (req, res) => {
    res.send(parksData)
    .then(console.log('Data is fetched on the backend'))
})

parksRouter.get('/home/activities/topics/:id', (req, res) => {
    res.send(parksData)
    console.log('Id data has been fetched')
})

module.exports = parksRouter