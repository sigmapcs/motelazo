const User = require('../models/Users'),
  jwt = require('jwt-simple')
  c = console.log

const apiResponse = (req, res, err, data) => {
  if (err){
    res.status(500).send({
      message: `Error interno del servicor. ${err.message}`
    })
  } else{
    if (data){
      console.log(token)
      res.status(200).send({ data, token })
    }else {
      res.status(404).send({
        message: `No existen datos en el API con tus parámetros de búsqueda.`
      })
    }
  }
}

const getUsers = async (req, res) => {
  await User
    .find({})
    .sort({_id: -1})
    .exec((err,data) => apiResponse(req,res,err,data))
}

// const postUser = async (req, res) => {
//   let user = new User(req.body)
//   c(req.body)
//   await user.save((err, data) => {
//     apiResponse(req, res, err, data, token)
//   })
// }

// const getUser = async (req,res) => {
//   await User
//   .findById(req.params.id)
//   .exec((err,data) => apiResponse(req,res,err,data))
// }

// const putUser = async (req, res) => {
//   await User
//   .findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {new: true},
//     (err, data) => apiResponse(req, res, err, data)
//   )
// }

// const deleteUser = async (req, res) => {
//   await User
//   .findByIdAndRemove(
//     req.params.id,
//     (err, data) => apiResponse(req, res, err, data)
//   )
// }


module.exports = {
  getUsers
}