const Park = require('../models/park-model')
const seedData = require('../models/parks.json')


Park.deleteMany({})
.then(() => {
    return Park.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit()
})