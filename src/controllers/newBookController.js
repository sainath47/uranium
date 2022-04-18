const newAuthorModel = require("../models/newAuthorModel");
const newBookModel = require("../models/newBookModel");
const newPublisherModel = require("../models/newPublisherModel");


// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const createNewBook = async function (req, res) {
  let authorId = req.body.author;
  let publisherId = req.body.publisher
  if (authorId) {

    let authorIdDB = await newAuthorModel.findOne({ author: authorId });
    // console.log(authorIdDB._id)}
    if (authorId == authorIdDB._id) {

      if(publisherId){

        let publisherIdDB = await newPublisherModel.findOne({ publisher: publisherId });
        if (publisherId == publisherIdDB._id) { 
          
      let book = req.body;
      let bookCreated = await newBookModel.create(book);
      return res.send({ data: bookCreated });
    } else {
     return res.send({ msg: "Author's id not found" });
    }
  } else {
   return res.send({ msg: "author ID is required" });
  }

 
 
};

const getAllBooksData = async function (req, res) {
  let specificBook = await newBookModel.find().populate("author ");
  let a = await newBookModel.find().populate("publisher ");
  res.send({ data: specificBook ,a});
};



// const 

// let specificBook = await newBookModel.find().populate("author ");
// let a = await newBookModel.find().populate("publisher ");
// res.send({ data: specificBook ,a});

// let a= await newBookModel.find({publisher:penguine}).updateMany({publisher:penguine},)
// let b= await newBookModel.find({publisher:harper}).update()


module.exports.createNewBook = createNewBook;
module.exports.getAllBooksData = getAllBooksData;
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
// .populate("author_id");


//now what i have to do is ,get the valid author and get his author id and same for newPublisher