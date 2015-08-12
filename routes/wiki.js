var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;


//FIXME
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;

  var page = new Page({
    title: title,
    content: content
    // urlTitle: urlTitleGen(title)
  });

  page.save()
    .then(function(){
      // res.redirect('/');
      res.json(page);
    })
    .then(null, function (err){
      console.error(err);
    });
});

router.get('/add', function(req,res,next){
  res.render('addpage', {});
});

module.exports = router;
