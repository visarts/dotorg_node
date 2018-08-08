const ObjectID = require('mongodb').ObjectID

const collectionName = 'artists'

module.exports = function (app, db) {
  app.get('/', (req, res) => {
    // can only render when a render engine is set (in the index.js app config)
    res.render('../views/main.jsx')
  })

  app.get('/artists/all', (req, res) => {
    db.collection(collectionName).find().toArray((err, result) => {
      if (err) {
        res.send({ error: err })
      } else {
        res.send(result)
      }
    })
  })

  app.post('/artists/post', (req, res) => {
    const artist = { name: req.body.name, longName: req.body.longName }
    db.collection(collectionName).insert(artist, (err, result) => {
      if (err) {
        res.send({ error: 'oops there\'s an error' })
      } else {
        res.send(result.ops[0])
      }
    })
  })

  app.get('/artists/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection(collectionName).findOne(details, (err, item) => {
      if (err) {
        res.send({ error: 'oops there\'s an error' })
      } else {
        res.send(item)
      }
    })
  })

  app.delete('/artists/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection(collectionName).remove(details, (err, item) => {
      if (err) {
        res.send({ error: 'oops there\'s an error' })
      } else {
        res.send(`Artist ${id} deleted`)
      }
    })
  })

  app.put('/artists/:id', (req, res) => {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    const artist = { name: req.body.name, longName: req.body.longName }
    db.collection(collectionName).update(details, artist, (err, result) => {
      if (err) {
        res.send({ error: 'oops there\'s an error' })
      } else {
        res.send(artist)
      }
    })
  })
}
