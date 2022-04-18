const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {
    name: String,
   headQarter:String

}, { timestamps: true });


module.exports = mongoose.model('newpublishers', bookSchema)

// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
