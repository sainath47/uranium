const newPublisherModel = require("../models/newPublisherModel")


const createNewPublisher= async function (req, res) {
    let book = req.body
    let publisherCreated = await newPublisherModel.create(book)
    res.send({data: publisherCreated})
}

const getNewPulisher= async function (req, res) {
    let publishers = await newPublisherModel.find()
    res.send({data: publishers})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createNewPublisher= createNewPublisher
module.exports.getNewPulisher= getNewPulisher



