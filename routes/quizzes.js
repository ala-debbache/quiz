const express = require('express');
const Quiz = require('../modules/Quiz');
const User = require('../modules/User');

const router = express.Router();

router.get("/",async (req,res)=>{
    try {
        const quizzes = await Quiz.find();
        console.log("fetching data from database");
        res.json(quizzes);
    } catch (err) {
        res.json({error: err});
    }
});

router.get("/:id",async (req,res)=>{
    try {
        const quiz = await Quiz.findById(req.params.id);
        console.log("fetching element from database");
        res.json(quiz);
    } catch (err) {
        res.json({error: err});
    }
});

router.post("/",async (req,res)=>{
    try {
        const quiz = Quiz(req.body);
        await quiz.save();
        console.log("new element created");
        res.json(quiz);
    } catch (err) {
        res.json({error: err});
    }
});

router.delete("/:id",async (req,res)=>{
    try {
        const count = await Quiz.deleteOne({_id: id});
        console.log(`${count} elements deleted`);
        res.json(count);
    } catch (err) {
        res.json({error: err});
    }
});

module.exports = router;