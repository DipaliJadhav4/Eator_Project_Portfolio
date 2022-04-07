const express = require('express');
const userMiniApp = express.Router();
const mongoUtil = require('../mongoutil')
//have the middleware to read the body
userMiniApp.use(express.json())

//register the GET
userMiniApp.post('/login',async (req, res)=>{
    const {
        email,
        password
    } = req.body
    //if email and password is present
    if(email && password){
       const user = await mongoUtil.getDoc("eator","users", {email,password})
       //if user exists
       if(user){
            res.json({
                firstname : user.firstname
            })
       }else{
           //send un auth excpetion
           res.sendStatus(401)
       }
    } 
});

userMiniApp.post('/register',async (req,res)=>{
    //read the registration details
    const userDetails = req.body
    console.log(userDetails)
    //add the details to database
    const result = await mongoUtil.addDoc("eator","users",userDetails)
    res.send(result)
       .sendStatus(201)
})

module.exports = userMiniApp;





// PORT=8888
// MONGOCON=mongodb+srv://devuser:devuser@cluster0.b60by.mongodb.net
//mongodb+srv://dipali:dipali@cluster0.gqxzk.mongodb.net