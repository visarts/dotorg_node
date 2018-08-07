const ObjectID = require('mongodb').ObjectID

const collectionName = 'artists'

module.exports = function (app, db) {
  app.get('/', (req, res) => {
    res.send('<h1 style="color: #56a; font: bold 2em sans-serif;">its a GET call</h1>')
  })

  app.post('/post', (req, res) => {
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
