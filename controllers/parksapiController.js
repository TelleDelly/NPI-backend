const express = require('express')
const { Router } = require('express')
const parksRouter = express.Router()
const parksData = require('../models/data.json')



app.get('/home', (req, res) => {
    res.send(parksData)
    .then(console.log('Data is fetched on the backend'))
})

app.get('/home/activities/topics/:id', (req, res) => {
    res.send(parksData)
    console.log('Id data has been fetched')
})

module.exports = parksRouter