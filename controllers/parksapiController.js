const express = require('express')
const { Router } = require('express')
const parksRouter = express.Router()

const Park = require('../models/park-model.js')
const Trail = require('../models/trail-model.js')

//Access using the prefix /parks

//General search route that will access the collection by using query keywords
/*
access parks data using keyword phrases such as name or state
such as
https://endpoint.com/trails/search?name=Yosemite&state=CA

Here is a list of supported queries
fullName=
parkCode=

access nested data members with dot notation
Ex.
?addresses.stateCode=KY
This will pull all parks in kentucky
*/

parksRouter.get('/search', (req, res) => {
    Park.find(req.query)
    .then((parks) => res.send(parks))
    .catch(console.error)
})

parksRouter.get('/', (req, res) => {
    Park.find({})
    .then((parks) => res.send(parks))
    .catch(console.error)
})

parksRouter.get('/:id', (req, res) => {
    Park.findById(req.params.id)
    .then((trail) => res.send(trail))
    .catch(console.error)
})

parksRouter.put('/:id', (req, res) => {
    Park.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(res.send('Updated data'))
    .catch(console.error)
})

parksRouter.post('/', (req, res) => {
    Park.create(req.body)
    .then(res.send("Added data"))
    .catch(console.error)
})

parksRouter.delete('/:id', (req, res) => {
    Park.findByIdAndRemove(req.params.id)
    .then(res.send("deleted data"))
    .catch(console.error)
})

module.exports = parksRouter