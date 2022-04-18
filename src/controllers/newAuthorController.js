const newAuthorModel = require("../models/newAuthorModel")


const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}

const getNewAuthorsData= async function (req, res) {
    let authors = await newAuthorModel.find()
    res.send({data: authors})
}

module.exports.createNewAuthor= createNewAuthor
module.exports.getNewAuthorsData= getNewAuthorsData



    