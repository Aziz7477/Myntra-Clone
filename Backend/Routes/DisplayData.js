const express = require('express');
const router = express.Router();


router.post("/productsData",(req, res) => { 
    try{
        res.send([global.products]);
    }
    catch(err){
        console.error(err.message);
        res.send("Server Error")
    }
})

module.exports = router;