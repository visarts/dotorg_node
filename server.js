const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express()

const port = 8000

const dbName = 'portitude'

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database.db(dbName))

  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})
