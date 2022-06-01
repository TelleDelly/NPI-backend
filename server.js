const express = require('express')
const cors = require('cors')
const parksapiController = require('./controllers/parksapiController')
const trailController = require('./controllers/trail-controller')
const commentController = require('./controllers/commentController')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/trails', trailController)

app.use('/parks', parksapiController)

app.use('/comments', commentController)
const port = process.env.PORT || 4000


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
