const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({$and : {bookName: 1, authorName: 1, _id: 0} })
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let data = req.body.year
    let output= BookModel.find(data)
    res.send({msg: output})
}

const getParticularBooks = async function (req, res) {
    let data = req.body
    let output= BookModel.find(data)
    res.send({msg: output})
}

const getXINRBooks = async function (req, res) {
    // let output= BookModel.find({ {prices: $or: {[indianPrice:}}})
   let output = BookModel.find( { "prices.indianPrice": { $in: [ "100INR" , "200INR", "500INR" ] } } )
    res.send({msg: output})//Indian price tag of “100INR” or “200INR” or “500INR”
}// probem in code even after copy pasting



const getRandomBooks= async function (req, res) {
    // let data = req.body.totalpages
    let output= BookModel.find({$or: [ {totalPages:{$gt: 500 }}]})
    res.send({msg: output})
}// available in stock or have more than 500 pages 



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getXINRBooks= getXINRBooks
