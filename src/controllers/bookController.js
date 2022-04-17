const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")




const createNewAuthor= async function (req, res) {
  if(req.body.author_id)  {
      let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
  }
  else {
      res.send({msg: "please enter author_id"})
  }
}


const createNewBook= async function (req, res) {
    if(req.body.author_id)  {
        let data= req.body
      let savedData= await bookModel.create(data)
      res.send({msg: savedData})
    }
    else {
        res.send({msg: "please enter author_id"})
    }
}//as per the post request end point the frame will take in data into mode and make a model



const allBooks= async function (req, res) {
    let authorDetails= await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName =await bookModel.find({author_id: id}).select({name:1})
    res.send({msg:  booksName})
}


const updatedBookPrice= async function (req, res) {
    let bookDetails= await bookModel.find({name: "Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.findOne({author_id: id}).select({author_name:1,_id:0})

    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:authorN,updatedPrice })
}// new: true will show the updated document on output screen


const authorName= async function (req, res) {
    const bookId = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id = bookId.map(inp =>inp.author_id)

    let temp = []
    for(let i=0;i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(author)
    }

    const authorName = temp.flat()
    res.send({msg: authorName})

   
}






module.exports.createNewAuthor= createNewAuthor

module.exports.createNewBook= createNewBook

module.exports.allBooks= allBooks

module.exports.updatedBookPrice= updatedBookPrice

module.exports.authorName= authorName

