const User = require('../models/User');

const CryptoJS = require('crypto-js')


module.exports = {
    createUser:async(req,res)=>{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            location: req.body.location,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString()
        })
     try {
        await newUser.save();
        res.status(201).json({message:'User successfuly created'});
     } catch (error) {
        res.status(500).json({message: error})
     }
    }
}