const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const mongoose =require("mongoose")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/chetanBhagat",BookController.chetanBhagat  )




module.exports = router;





// create the following API’s (write logic in bookController and routes in routes):
// createBook : to create a new entry..use this api to create 11+ entries in your collection
// bookList : gives all the books- their bookName and authorName only 
// getBooksInYear: takes year as input in post request and gives list of all books published that year
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
// getRandomBooks - returns books that are available in stock or have more than 500 pages 
