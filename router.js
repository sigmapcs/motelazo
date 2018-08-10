const express = require('express'),
  // Country = require('./routes/country'),
  Motel = require('./routes/motel'),
  // User = require('./routes/user'),
  Sale = require('./routes/sale'),
  Login = require('./middlewares/login'),
  userCtrl = require('./controllers/user'),
  auth = require('./middlewares/auth'),
  api = express.Router()
  // passport = require('passport'),
  // Passport = require('./routes/passport')

api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'Funcionando API RESTful de Maratones con Node.js y MongoDB.'
  })
})

// api.post('/countries', Country.postCountries)
// api.get('/countries', Country.getCountries)
// api.get('/marathons', Marathon.getMarathons)
// api.post('/marathon', Marathon.postMarathon)
// api.get('/marathon/:id', Marathon.getMarathon)
// api.put('/marathon/:id', Marathon.putMarathon)
// api.delete('/marathon/:id', Marathon.deleteMarathon)


// api.get('/users', User.getUsers)
// api.post('/user', User.postUser)
// api.get('/user/:id', User.getUser)
// api.put('/user/:id', User.putUser)
// api.delete('/user/:id', User.deleteUser)

api.post('/signup', auth, userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/users', auth, userCtrl.getUsers)


api.get('/motels',  Motel.getMotels)
api.post('/motel', auth, Motel.postMotel)
api.get('/motel/:id', Motel.getMotel)
api.put('/motel/:id', auth, Motel.putMotel)
api.delete('/motel/:id', auth, Motel.deleteMotel)

api.get('/sales', auth, Sale.getSales)
api.post('/sale', Sale.postSale)
api.get('/sale/:code', Sale.getSale)
api.put('/sale/:id', auth, Sale.putSale)
api.delete('/sale/:id', auth, Sale.deleteSale)

// api.post('/login', Passport.authenticate('local',{
//   suscess : {message : 'correcto'},
//   failure: {message: 'error'}
// }))


console.log(Login)

module.exports = api

