const express = require('express'),
  // Country = require('./routes/country'),
  Motel = require('./routes/motel'),
  User = require('./routes/user')
  Sale = require('./routes/sale')
  api = express.Router()

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


api.get('/users', User.getUsers)
api.post('/user', User.postUser)
api.get('/user/:id', User.getUser)
api.put('/user/:id', User.putUser)
api.delete('/user/:id', User.deleteUser)


api.get('/motels', Motel.getMotels)
api.post('/motel', Motel.postMotel)
api.get('/motel/:id', Motel.getMotel)
api.put('/motel/:id', Motel.putMotel)
api.delete('/motel/:id', Motel.deleteMotel)

api.get('/sales', Sale.getSales)
api.post('/sale', Sale.postSale)
api.get('/sale/:id', Sale.getSale)
api.put('/sale/:id', Sale.putSale)
api.delete('/sale/:id', Sale.deleteSale)


module.exports = api
