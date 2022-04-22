const req = require('express/lib/request');
const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema( {
    
	
	
	userId: {
        type:ObjectId,
        ref:"User"

    },
    
	productId: {
        type:ObjectId,
        ref:"Product"
    },
	amount: Number ,
	isFreeAppUser: Boolean, 
	date: String

        
}, { timestamps: true });

module.exports = mongoose.model('Order', userSchema)


// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }