const mongoose = require('mongoose')

const mongoURI =
process.env.NODE_ENV === 'production'
? process.env.DB_URL
: process.env.DB_DEV_URL

console.log(process.env.DB_URL)

mongoose.connect(mongoURI)
.then(instance => console.log(`Connected to: ${instance}`))
.catch(console.error)

module.exports = mongoose
