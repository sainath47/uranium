const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController= require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewBook", newBookController.createNewBook)

// router.post("/createNewAuthor", authorController.createNewAuthor  )

router.get("/getNewPulisher", newPublisherController.getNewPulisher)

// router.post("/createNewPublisher", bookController.createNewPublisher  )

// router.get("/getAllBooksData", newBookController.getAllBooksData)

router.get("/getNewAuthorsData", newAuthorController.getNewAuthorsData)

// router.PUT("/getAllBooksData", bookController.getAllBooksData)

module.exports = router;