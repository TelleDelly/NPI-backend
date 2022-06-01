const { Schema } = require('mongoose')
const mongoose = require('../db/Connection')

const CommentSchema = new mongoose.Schema({
    parkRef: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    commentBody: {
        type: String,
        required: true
    }

},
{timestamps: true})

const Comment = mongoose.model('Comments', CommentSchema)

module.exports = Comment