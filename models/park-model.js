const mongoose = require('../db/Connection')

const ParkSchema = new mongoose.Schema (
    {
          url: {
            type: String
          },
          fullName: {
            type: String
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
                    type: String
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
                    cost: String ,
                    description: String, 
                    title: String 
                }
            ]
          },
          entrancePasses: {
            type: [
                Mixed
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
              Mixed
            ]
          },
          addresses: {
            type: [
              Mixed
            ]
          },
          images: {
            type: [
              Mixed
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

