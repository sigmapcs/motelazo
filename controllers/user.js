const User = require('../models/user'),
    service = require('../services')

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
const signUp = async (req, res) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        displayName: req.body.displayName
        // password: req.body.password
    })

    await user.save((err) => {
        if (err) return res.status(500).send({
            message: `Error al crear el usuario: ${err}`
        })
        return res.status(201).send({
            token: service.createToken(user)
        })
    })
}

const signIn =  async (req, res) => {
    await User.find({
        email: req.body.email
    }, (err, user) => {
        if (err) return res.status(500).send({
            message: err
        })
        if (!user) return res.status(404).send({
            message: 'No existe el usuario'
        })

        req.user = user
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        })
    })
}

const index = async (req,res) => {

}

const getUsers = async (req, res) => {
    
    await User
        .find({})
        .sort({
            _id: -1
        })
        .exec((err, data) => {
            let token = null
            apiResponse(req, res, err, data, token)
        })
}


module.exports = {
    signUp,
    signIn,
    index,
    getUsers
}
