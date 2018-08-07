module.exports = function (app, db) {
  app.post('/post', (req, res) => {
    res.send('post call successful')
  })
}
