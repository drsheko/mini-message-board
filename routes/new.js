var express = require('express');
var router  =express.Router();


router.get('/',(req,res,next)=>{
    res.render('new' , {title: 'New Message'})
})




module.exports = router