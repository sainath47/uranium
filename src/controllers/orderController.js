const req = require("express/lib/request")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const { findById } = require("../models/userModel")
const userModel = require("../models/userModel")



const createAOrder = async function(req, res) {
   
let userId=req.body.userId
let productId=req.body.productId
   
let fetchUserId = await userModel.findById(userId).select({_id:1})
    if(!fetchUserId) {return res.send({msg:"userId invalid"})}

let fetchProductId = await productModel.findById(productId).select({_id:1})
    if(!fetchProductId) { res.send({msg:"productId invalid"})}

    if(req.headers.isfreeappuser=="true") {
        req.body.amount=0
        req.body.isFreeAppUser=true

        let userData = req.body
    let a= await orderModel.create(userData)
    res.send({msg: a})

    }

   else if(req.headers.isfreeappuser=="false") {
        let fetchBalance = await userModel.findById(userId).select({balance:1})
        let fetchPrice = await productModel.findById(productId).select({price:1})
        if( fetchPrice.price>fetchBalance.balance)
        {
            res.send({msg:"insufficient balance"})
        }
        else{
        let newbalance =fetchBalance.balance-fetchPrice.price
        await userModel.findByIdAndUpdate(userId,{balance:newbalance})
        req.body.amount= fetchPrice.price
        req.body.inFreeAppUser=false

        let userData = req.body
        let a= await orderModel.create(userData)
        res.send({msg: a})
    
        }

    
    }
        

}
module.exports.createAOrder = createAOrder



// const req = require("express/lib/request")
// const ProductModel= require("../models/Productmodel")
// const userModel = require("../models/userModel")
// const orderModel = require("../models/OrderModel")


// const getCurrentDate = () => {
//     const date = new Date()
//     return date.getDate()+"/" + (date.getMonth()+1)+ "/"+ date.getFullYear()}


// const placeOrder = async function(req,res){

//     if(!req.body.user_id|| !req.body.product_id)
//         return res.send("UserId and ProductId are required Fields")

//         const isProductValid = await ProductModel.findById({_id:req.body.product_id})
//         const isUserValid = await userModel.findById({_id:req.body.user_id})

//         if (!isUserValid || !isProductValid) 
//         return res.send("entered UserId or ProductId or both are not valid")
        
          
//         if(req.isFreeAppUser=="true")
//         {
//             const order = {
//                 userId :req.body.user_id,
//                 productId:req.body.product_id,
//                 amount:0,
//                 isFreeApp
