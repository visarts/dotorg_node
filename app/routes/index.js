const routes = require('./main_routes')

module.exports = function (app, db) {
  routes(app, db)
}
