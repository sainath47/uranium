const { json } = require('body-parser');
const express = require('express');
const logger = require('./logger')

const router = express.Router();

const candidates = [ 'sainath','sagar','neeraj', 'sarada']

router.get('/all-candidates', function (req, res) {
   


res.send(candidates)

});
router.get('/candidates', function (req, res) {



   
});
router.get('/movies', function (req, res) {

    const arr = [ 'sainath','sagar','neeraj', 'sarada']

   const sagar = arr.values()
    res.send(sagar)



   
});



router.get('/movies/:indexNumber', function (req, res) {

    const arr = [ 'sainath','sagar','neeraj', 'sarada']

    res.send(arr[req.params.indexNumber])

});


router.get('/movies/:indexNumber', function (req, res) {

    const arr = [ 'sainath','sagar','neeraj', 'sarada']

if(req.params.indexNumber>arr.length-1)
{
    let a="please enter a valid input"
    res.send(a)
}

else{
let a=arr[req.params.indexNumber]

    res.send(a)
}

});



router.get('/films', function (req, res) {

    const sagar = [ 
       
        {
            "id": 1,
            "name": "The Shining"},
        {
            "id": 2,
            "name": "pushpa"},
        {
            "id": 3,
            "name": "khiladi"},
        {
            "id": 4,
            "name": "boss"}
        ]


res.send(sagar)



});




router.get('/films/:filmId', function (req, res) {


   const sagar = [ 
       
    {
        "id": 1,
        "name": "The Shining"},
    {
        "id": 2,
        "name": "pushpa"},
    {
        "id": 3,
        "name": "khiladi"},
    {
        "id": 4,
        "name": "boss"}
    ]

    for (let i =0; i<sagar.length; i++)
    {
      if(req.params['filmId']>sagar.length)
      {let a = 'No movie exists with this id'
          res.send(a)
      }
    

      else if(sagar[i].id == req.params['filmId'])
      {
          let a= sagar[i].name
          res.send(a)
      }
  
  
    }
  
    
    
      

  

});



// router.get('/movies/:indexNumber', function (req, res) {

//     const arr = [ 'sainath','sagar','neeraj', 'sarada']

// if()

//     res.send(arr[req.params.indexNumber])

// });
//   req.params.indexNumber




 





module.exports = router;
// adding this comment for no reason