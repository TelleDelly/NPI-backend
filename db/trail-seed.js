const Trail = require('../models/trail-model')
const seedData = require('./trail-seeds.json')


Trail.deleteMany({})
.then(() => {
    return Trail.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit()
})