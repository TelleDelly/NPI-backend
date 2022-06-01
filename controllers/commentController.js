const express = require('express')
const {Router} = require('express')
const commentRouter = express.Router()

const Comment = require('../models/comment-model')

commentRouter.get('/:parkID', (req, res) => {
    Comment.find({parkRef: {$eq: req.params.parkID}})
    .then((comments) => res.send(comments))
    .catch(console.error)
})

commentRouter.put('/edit/:commentID', (req, res) => {
    Comment.findByIdAndUpdate(req.params.commentID, req.body, {new: true})
    .then(res.send('Updated comment'))
    .catch(console.error)
})

commentRouter.post('/add/:parksID', (req, res) => {
    Comment.create(req.body)
    .then(res.send('Added comment'))
    .catch(console.error)
})

commentRouter.delete('/delete/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
    .then(res.send('deleted comment'))
    .catch(console.error)
})


module.exports = commentRouter