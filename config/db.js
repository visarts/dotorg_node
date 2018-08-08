module.exports = function (USER, PASS) {
  const name = 'portitude'
  return {
    url: `mongodb://${USER}:${PASS}@ds115472.mlab.com:15472/${name}`,
    name,
  }
}
