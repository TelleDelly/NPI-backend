const express = require('express')
const trailController = require('./controllers/trail-controller')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/trails', trailController)

const port = process.env.PORT || 4000



app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})