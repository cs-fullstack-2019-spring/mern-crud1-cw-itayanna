var express = require('express');
var router = express.Router();
var ProductCollections = require("../models/ProductSchema");
/* GET home page. */
router.get('/',(req, res, next)=>{
  ProductCollections.find({}, (errors, results)=>{
    if(errors) res.send(errors);
else res.send(results);
});
});


router.post('/add', (req, res)=>{
  ProductCollections.create(req.body, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});

module.exports = router;
