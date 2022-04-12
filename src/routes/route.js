const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


// create a new book and another api to get the list of all books. 


router.post("/createBook", bookController.createBook  )

router.get("/getBookData", bookController.getBooksData)

module.exports = router;