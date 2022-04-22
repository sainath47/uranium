const req = require("express/lib/request")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")


const createAProduct = async function(req, res) {
    let productData = req.body
    let a= await productModel.create(productData)
    
    res.send({msg: a})
}
module.exports.createAProduct = createAProduct