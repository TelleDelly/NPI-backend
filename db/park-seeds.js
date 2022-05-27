const Park = require('../models/park-model')
const seedData = require('../models/parks.json')

Park.deleteMany({})
.then(() => {
    return Park.insertMany(seedData)
})
.catch(console.error)
.finally(() => {
    process.exit()
})