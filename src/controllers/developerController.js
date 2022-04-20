const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}

const scholarshipDevelopers= async function (req, res) {
    let scholarshipDevs = await developerModel.find({$and:[{gender:'female'},{percentage:{$gte:70}}]}).populate('batch')
    res.send({data: scholarshipDevs})
}//.An eligible developer is female with percentage greater than or equal to 70


const filterDevelopers= async function (req, res) {
    let que=req.query
   let batchIDs = await batchModel.findOne({name:que.name}).select({_id:1})

    let filterDevs = await developerModel.find({$and:[{batch:batchIDs._id},{percentage:{$gte:que.percentage}}]}).populate("batch")
    res.send({data: filterDevs})
}//here i have to access the batch programme which is inside of batch which is inside of dev with id.



const getDeveloperData= async function (req, res) {
    let developers = await developerModel.find().populate('batch')
    res.send({data: developers})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createDeveloper= createDeveloper
module.exports.scholarshipDevelopers=scholarshipDevelopers
module.exports.filterDevelopers = filterDevelopers
module.exports.getDeveloperData = getDeveloperData

