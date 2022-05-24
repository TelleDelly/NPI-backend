const express = require ('express')
const app = express()
const data = require ('./model/data.json')
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(4000, () => {
    console.log("app listening on port 4000")
  })


app.get('/home', (req, res) => {
    res.send(data)
    .then(console.log('Data is fetched on the backend'))
})

app.get('/home/activities/topics/:id', (req, res) => {
    res.send(data)
    console.log('Id data has been fetched');
})