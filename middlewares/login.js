

const User = require('../models/users')

const apiResponse = (req, res, err, data, token) => {
    if (err) {
        res.status(500).send({
            message: `Error interno del servicor. ${err.message}`
        })
    } else {
        if (data) {
            res.status(200).send({
                data,
                token
            })
        } else {
            res.status(404).send({
                message: `No existen datos en el API con tus parámetros de búsqueda.`
            })
        }
    }
}

const login = async (req, res) =>{
    await
     User.find({email: req.body.email})
     .exec((err,data) => {
        if (req.body.password === User.password){
            token = {
                token: 'generartoken'
            }
            apiResponse(req, res, err, data, token)
        }else{
            err = {message: 'Contraseña no valida'},
            apiResponse(req, res, err, data, null)
        }

     })
}

const log = async (req,res) => {
    await User
        .find({})
        .sort({
            _id: -1
        })
        .exec((err, data) => apiResponse(req, res, err, data))
}

module.exports = {login,log}

