

const printDate=function (){

    console.log(new Date())

}



const printMonth=function (){


    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
console.log(module)
console.log(name)

}

const getBatchInfo= function () {

    console.log('Uranium, W2D3, the topic for today is Nodejs module system')
}


module.exports.printDate=printDate

module.exports.printMonth=printMonth

module.exports.getBatchInfo=getBatchInfo








