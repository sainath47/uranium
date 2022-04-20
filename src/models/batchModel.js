const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema( {
    
    name: String,
    size:Number,
    program:{
        type:String,
        enum: ['frontend','backend']

}
}, { timestamps: true });//the program should be an enum with the following allowed values only - backend and frontend


module.exports = mongoose.model('Batch', batchSchema)



// {
//     _id: ObjectId("65321bfa4d9fe0d34da86829"),
// name: “Uranium”,
// size: 250,
// program: “backend”
// }
