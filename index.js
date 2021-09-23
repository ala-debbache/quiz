const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizzesRouter = require('./routes/quizzes');
const usersRouter = require('./routes/users');
const completedRouter = require('./routes/completed');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use("/quizzes",quizzesRouter);
app.use("/users",usersRouter);
app.use("/completed",completedRouter);

mongoose.connect(process.env.MONGO_URI,()=> console.log("we're connected to the database"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3008,()=> console.log(`Server running on http://localhost:3008`));