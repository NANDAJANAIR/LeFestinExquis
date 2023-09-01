const express =  require('express')
const router =  express.Router()
const Product = require("../models/Product")
router.get("/showallproducts", async (req, res) => {
    try{
        const products= await Product.find({})
        if(products){
            return res.status(201).json({
                success: true ,
                message:"Products fetched successfully",
                data : products
                })
                }else{
                    throw new Error("No product found");
                    }}catch(err){
                        console.log(`Error in fetching all the products ${err}`)
                        return res.status(500).send(`${err}`);
                        };
                        });
module.exports = router;