const express = require('express');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const quizSchema = {
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}

const Quiz = mongoose.model("Quiz",quizSchema);

module.exports = Quiz;