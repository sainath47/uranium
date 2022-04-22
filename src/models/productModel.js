const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
	
	name:String,
	category:String,
	price:{
        type:Number,
        require: true
    }

        
}, { timestamps: true });

module.exports = mongoose.model('Product', userSchema)





// Your product document should look like this
// ```
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Catcher in the Rye",
// 	category:"book",
// 	price:70 //mandatory property
// }