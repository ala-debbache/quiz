const express = require('express');
const { find } = require('../modules/User');
const User = require('../modules/User');
const Completed = require('../modules/Completed');

const router = express.Router();

router.get("/",async (req,res)=>{
    try {
        const users = await User.find();
        console.log("fetching users from database");
        res.json(users);
    } catch (err) {
        res.json({error: err});
    }
});

router.get("/:id/completed-quizzes",async (req,res)=>{
    try {
        const completed = await Completed.find({user_id: req.params.id});
        console.log("fetching user completed quizzes");
        res.json(completed);
    } catch (err) {
        res.json({error: err});
    }
});

router.post("/register",async (req,res)=>{
    try {
        const user = User(req.body);
        await user.save();
        console.log("new user has been created");
        res.json(user);
    } catch (err) {
        res.json({error: err});
    }
});

router.post("/login",async (req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        if(user){
            if(req.body.password===user.password){
                console.log("loggin succesfuly");
                res.json(user);
            }else{
                res.json({error: "please try a valid password"});
            }
        }else{
            res.json({error: "this user does not exist"});
        }
    } catch (err) {
        res.json({error: err});
    }
});

module.exports = router;