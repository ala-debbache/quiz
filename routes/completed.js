const express = require('express');
const Completed = require('../modules/Completed');

const router = express.Router();

router.get("/",async (req,res)=>{
    try {
        const completed_quizzes = await Completed.find();
        console.log("fetching completed quizzes from database");
        res.json(completed_quizzes);
    } catch (err) {
        res.json({error: err});
    }
});

router.post("/",async (req,res)=>{
    try {
        const completed = Completed(req.body);
        await completed.save();
        console.log("completed quiz saved");
        res.json(completed);
    } catch (err) {
        res.json({error: err});
    }
});

module.exports = router;