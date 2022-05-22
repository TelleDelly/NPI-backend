const mongoose = require('mongoose')
require('dotenv').config()

// const mongoURI = 
// process.env.NODE_ENV === 'production'
// ? process.env.DB_URL
// : process.env.DB_DEV_URL


// mongoose.connect(mongoURI)
mongoose.connect('mongodb+srv://trailblazer_user:NXjP93JRz47sbcm7@cluster0.c3iwz.mongodb.net/NPI?retryWrites=true&w=majority')
.then(instance => console.log(`Connected to: ${instance}`))
.catch(console.error)

module.exports = mongoose
