//const isAuth = require('./middlewares/isAuth')
//const authRoutes = require('./routes/authRoutes')
const cidadesRoutes = require('./routes/cidades')
const clientesRoutes = require('./routes/clientes')


module.exports = function (router, app) {

  router.use('/cidades', cidadesRoutes)

  router.use('/clientes', clientesRoutes)

  router.get('/', function (req, res, next) {
    res.json({
      test: 'api',
      status: 200,
    })
  })
}
