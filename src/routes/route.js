const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const mongoose =require("mongoose")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createNewBook",BookController.createNewBook  )
router.post("/createNewAuthor",BookController.createNewAuthor  )
router.get("/allBooks",BookController.allBooks  )
router.get("/updatedBookPrice",BookController.updatedBookPrice  )
router.get("/authorName",BookController.authorName )




module.exports = router;




