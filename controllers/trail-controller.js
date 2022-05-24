const { Router } = require('express')
const express = require('express')
const trailRouter = express.Router()

const Trail = require('../models/trail-model.js')

trailRouter.get('/', (req, res) => {
    Trail.find({})
    .then((trails) => res.send(trails))
    .catch(console.error)
})

trailRouter.get('/:id', (req, res) => {
    Trail.findById(req.params.id)
    .then((trail) => res.send(trail))
    .catch(console.error)
})

trailRouter.put('/:id', (req, res) => {
    Trail.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(res.send("Updated data"))
    .catch(console.error)
})

trailRouter.post('/', (req,res) => {
    Trail.create(req.body)
    .then(res.send("Added data"))
    .catch(console.error)
})

trailRouter.delete('/:id', (req, res) => {
    Trail.findByIdAndRemove(req.params.id)
    .then(res.send("Deleted data"))
    .catch(console.error)
    
})


module.exports = trailRouter