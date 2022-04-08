const express = require('express');
const logger = require('../logger/logger')
const helper=require('../util/helper')
const formatter=require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    logger.welcome()
 helper.printDate()
 helper.printMonth()
 helper.getBatchInfo()
 formatter.fun1()
 formatter.fun2()
 formatter.fun3()
res.send('sainath')

});



module.exports = router;
// adding this comment for no reason