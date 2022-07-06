var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-message-board' , messages:messages});
});

//post new msg 
router.post('/', (req,res,next)=>{
  
  let newMsg={
      text: req.body.text,
      user :req.body.user,
      added : new Date()
  }
  messages.push(newMsg)
  res.redirect('/')

  });


module.exports = router;
