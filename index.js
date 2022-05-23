

const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const app = express()
const route = require('./route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const multer= require("multer");
const { AppConfig } = require('aws-sdk');
app.use( multer().any())


mongoose.connect('mongodb+srv://functionup-uranium-cohort:q8znVj4ly0Fp0mpU@cluster0.0wdvo.mongodb.net/group9Database',
{
    useNewUrlParser: true
})
.then(()=>console.log('mongoDB is connected'))
.catch(error=>console.log(error.message))

app.use('/',route)


app.listen(3000,function(){
    console.log('SERVER RUNNING ON PORT'+3000)
})