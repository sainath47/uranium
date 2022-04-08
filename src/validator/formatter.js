// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]



const trim = function trim() {
    
    let a= ' functionup `'
    console.log(a.trim())
}

const changetoLowercase= function changetoLowercase(){

    let text = "Hello World!";
let result = text.toLowerCase();
console.log(result)
}

const changetoUpperCase= function (){
   
    let text = "Hello World!";
let result = text.toUpperCase();
console.log(result)
}

module.exports.fun1=trim
module.exports.fun2=changetoLowercase
module.exports.fun3=changetoUpperCase










