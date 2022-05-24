const mongoose = require('../db/Connection')

const TrailMetaData = new mongoose.Schema(
    {
        diffculty: {
            type: String,
        },
        trailLength: {
            type: Number,
        },
        netElevation: {
            type: Number,
        },
        accesibility: {
            tags: Array,
            isAccesible: String,
        },
        isMaintained: {
            type: Boolean,
        },
    }
)


const TrailSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        latlon: {
            lat: Number,
            lon: Number,
        },
        address: {
            POline: String,
            City: String,
            State: String,
            Country: String,
            zip: Number,
        },
        trailData: TrailMetaData,
        description: {
            type: String,
            required: true,
        },
        additionalNotes: {
            type: [String]
        },
        pictures: {
            type: Array,
        },
        Tags: {
            type: Array
        }
    },
    {timestamps: true}
)

const Trail = mongoose.model('Trails', TrailSchema)

module.exports = Trail