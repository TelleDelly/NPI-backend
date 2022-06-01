const { Schema } = require('mongoose')
const mongoose = require('../db/Connection')

const ParkSchema = new mongoose.Schema (
    {
          comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
          url: {
            type: String
          },
          fullName: {
            type: String,
            unique: true
          },
          parkCode: {
            type: String
          },
          description: {
            type: String
          },
          latitude: {
            type: String
          },
          longitude: {
            type: String
          },
          latLong: {
            type: String
          },
          activities: {
            type: [
              {
                  id: String,
                  name: String
              }
            ]
          },
          topics: {
            type: [
                {
                    id: String,
                    name: String
                }
            ]
          },
          states: {
            type:String
          },
          contacts: {
            phoneNumbers: {
              type: [
                {
                    phoneNumber: String,
                    description: String,
                    extension: String,
                    form: String
                },
              ]
            },
            emailAddresses: {
              type: [
                {
                    description: String,
                    emailAddress: String
                }
              ]
            }
          },
          entranceFees: {
            type: [
                {
                    cost: Number,
                    description: String, 
                    title: String 
                }
            ]
          },
          entrancePasses: {
            type: [
                {
                  cost: String,
                  description: String,
                  title: String
                }
            ]
          },
          fees: {
            type: Array
          },
          directionsInfo: {
            type: String
          },
          directionsUrl: {
            type: String
          },
          operatingHours: {
            type: [
              {
                exceptions: Array,
                description: String,
                standardHours:
                  {
                    wednesday: String,
                    monday: String,
                    thursday: String,
                    sunday: String,
                    tuesday: String,
                    friday: String,
                    saturday: String,
                  },
                  name: String
              }
            ]
          },
          addresses: {
            type: [
              {
                postalCode: String,
                city: String,
                stateCode: String,
                line1: String,
                form: String,
                line3: String,
                line2: String,
              }
            ]
          },
          images: {
            type: [
              {
                credit: String,
                title: String,
                altText: String,
                caption: String,
                url: String
              }
            ]
          },
          weatherInfo: {
            type: String
          },
          name: {
            type: String
          },
          designation: {
            type: String
          }
        }
      
)

const Park = mongoose.model("Parks", ParkSchema)

module.exports= Park

