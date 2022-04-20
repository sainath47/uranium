const batchModel = require("../models/batchModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data:batchCreated})
}

const getBatchData= async function (req, res) {
    let batches = await batchModel.find()
    res.send({data: batches})
}

module.exports.createBatch= createBatch
module.exports.getBatchData= getBatchData