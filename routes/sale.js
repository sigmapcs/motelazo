const Sale = require('../models/sale'),
    c = console.log

const apiResponse = (req, res, err, data) => {
    if (err) {
        res.status(500).send({
            message: `Error interno del servicor. ${err.message}`
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

const getSales = async (req, res) => {
    await Sale
        .find({})
        .sort({
            _id: -1
        })
        .exec((err, data) => apiResponse(req, res, err, data))
}

const postSale = async (req, res) => {
    let sale = new Sale(req.body)
    c(req.body)
    await sale.save((err, data) => apiResponse(req, res, err, data))
}

const getSale = async (req, res) => {
    await Sale
        .findById(req.params.id)
        .exec((err, data) => apiResponse(req, res, err, data))
}

const putSale = async (req, res) => {
    await Sale
        .findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            },
            (err, data) => apiResponse(req, res, err, data)
        )
}

const deleteSale = async (req, res) => {
    await Sale
        .findByIdAndRemove(
            req.params.id,
            (err, data) => apiResponse(req, res, err, data)
        )
}


module.exports = {
    getSales,
    postSale,
    getSale,
    putSale,
    deleteSale
}