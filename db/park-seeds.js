const Park = require('../models/park-model')
const seedData = require('../db/parks.json')

Park.deleteMany({})
.then(() => {
    return Park.insertMany(seedData)
})
.catch(console.error)
.finally(() => {
    process.exit()
})