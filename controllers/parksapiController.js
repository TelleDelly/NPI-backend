const express = require('express')
const { Router } = require('express')
const parksRouter = express.Router()

const Park = require('../models/park-model.js')

//Access using the prefix /parks


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

oarkRouter.delete('/:id', (req, res) => {
    Park.findByIdAndRemove(req.params.id)
    .then(res.send("deleted data"))
    .catch(console.error)
})

module.exports = parksRouter

module.exports = parksRouter