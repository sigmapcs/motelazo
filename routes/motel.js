const Motel = require('../models/motel'),
  c = console.log

const apiResponse = (req, res, err, data) => {
  if (err) {
    res.status(500).send({
      message: `Error interno del servidor. ${err.message}`
    })
  } else {
    if (data) {
      res.status(200).send({
        data
      })
    } else {
      res.status(404).send({
        message: `No existen datos en el API con tus parámetros de búsqueda.`
      })
    }
  }
}

const getMotels = async (req, res) => {
  await Motel
    .find({})
    .sort({
      '_id': -1
    })
    .exec((err, data) => apiResponse(req, res, err, data))
}

const postMotel = async (req, res) => {
  let motel = new Motel(req.body)
  c(req.body)
  await motel.save((err, data) => apiResponse(req, res, err, data))
}

const getMotel = async (req, res) => {
  await Motel
    .findById(req.params.id)
    .exec((err, data) => apiResponse(req, res, err, data))
}

const putMotel = async (req, res) => {
  await Motel.findByIdAndUpdate(
    req.params.id,
    req.body, {
      new: true
    },
    (err, data) => apiResponse(req, res, err, data)
  )
}

const deleteMotel = async (req, res) => {
  await Motel.findByIdAndRemove(
    req.params.id,
    (err, data) => apiResponse(req, res, err, data)
  )
}

module.exports = {
  getMotels,
  postMotel,
  getMotel,
  putMotel,
  deleteMotel
}
