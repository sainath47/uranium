const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( 
    
    {    
        author_id: {
type : Number,
required : true
        }
        ,
        author_name:String,
        age:Number,
        address:String
    }
        , { timestamps: true });

      
      //notation of data easy form to machine to understand
      
      
       

        module.exports = mongoose.model('author',authorSchema)


// String, Number
// Boolean, Object/json, array