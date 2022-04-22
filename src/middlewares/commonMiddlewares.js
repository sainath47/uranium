

const mid1= function ( req, res, next) {
 let validation= req.headers.isfreeappuser
//  console.log(validation)
    if(validation) {
    next()
}
    else{
        let a = "isFreeAppUser is required"
    res.send({msg:a})}
}

module.exports.mid1= mid1

