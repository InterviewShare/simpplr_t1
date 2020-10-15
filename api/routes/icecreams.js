var express = require('express');
var router = express.Router();
const yelp = require('../yelp');

router.get('/icecreams', async (req, res, next) => {

   try {
       const result = await yelp.getShops();
       const shops = result.jsonBody.businesses;
        if(!shops){
            res.status(400).json({error:"true", message:"Validation error", data:undefined});
            return;
        }
        const data = await Promise.all(shops.map(async (item, index) => {
            item.topReview = await yelp.getReview(index, item.alias);
            return item;
        }));
        res.status(200).json({error:"false", message:"Sending data", data});
   } catch (error) {
    res.status(error.statusCode?error.statusCode:500).json({error:"true", message:"Internal server/unexpected error", data:error});
   } 
  
});

module.exports = router;
