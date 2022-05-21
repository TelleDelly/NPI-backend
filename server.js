const express = require('express')
require('dotenv').config()
const trailController = require('./controllers/trail-controller')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/trails', trailController)

app.set("port", process.env.PORT || 8000)


app.listen(app.get("port"), () => {
    console.log(`Server is running on ${port}`)
})