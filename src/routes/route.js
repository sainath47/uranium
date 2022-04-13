const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const mongoose =require("mongoose")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/chetanBhagat",BookController.chetanBhagat  )




module.exports = router;




