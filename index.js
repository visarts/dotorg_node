const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const path = require('path')
const reactViews = require('express-react-views')

const app = express()

// when in production it will use the production port to run on
const port = process.env.PORT || 5000

const dbName = 'portitude'

// used to parse urls in the routing / API
app.use(bodyParser.urlencoded({ extended: true }))
// can now grab static files from the content folder
app.use('/content', express.static(path.join(__dirname, 'content')))

// tells the application what type of rendering engine to use and where the views are located
app.set('views', `${__dirname}/app/views`)
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

// connect to the mongodb database and give the data to the route config
MongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database.db(dbName))

  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})
