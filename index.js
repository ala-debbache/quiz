const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quizzesRouter = require('./routes/quizzes');
const usersRouter = require('./routes/users');
const completedRouter = require('./routes/completed');

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/quizzes",quizzesRouter);
app.use("/users",usersRouter);
app.use("/completed",completedRouter);

mongoose.connect(process.env.MONGO_URI,()=> console.log("we're connected to the database"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port,()=> console.log(`Server running on http://localhost:${port}`));