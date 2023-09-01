const express =  require('express')
const router =  express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
 const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtSecret = "mnduiewhwe9&"

router.post("/createuser",
body('email').isEmail(),
  // password must be at least 5 chars long
  body('password',"incorrect password").isLength({ min: 6 })
,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}
    
    
    const salt= await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    req.body.password=secPassword;

    
    
    
    
      try{

        await User.create(
           req.body
)
        console.log("success")
        res.send("success")

    }
    catch(err){
        console.log(err)
        res.send(err.message)
    }
})



router.post("/loginuser",body('email').isEmail(),
// password must be at least 5 chars long
body('password',"incorrect password").isLength({ min: 6 })

,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}


   let email = req.body.email;
    
    try{

       let userData =  await User.findOne({email});
       console.log(userData)
       if(!userData){
        return res.status(400).json({ errors: "Try logging with correct credentials" })
        }
        

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
       if(!pwdCompare){
        return res.status(400).json({ errors: "Try logging with correct password" })
    }
    const data = {
        user:{
             id:userData.id
        }
    }
    const authToken= jwt.sign(data,jwtSecret)
    console.log("success")
    res.send("success")
       }

    catch(err){
        console.log(err)
        res.send(err.message)
    }
})


router.get("/showalluser",async(req,res)=>{
    
      try{

const users = await User.find()




        console.log("success")
        res.send(users)




    }
    catch(err){
        console.log(err)
        res.send(err.message)
    }
})

module.exports = router;