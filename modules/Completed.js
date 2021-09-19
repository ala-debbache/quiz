const express = require('express');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const completedSchema = {
    user_id: {
        type: String,
        required: true
    },
    quiz_id: {
        type: String,
        required: true
    }
}

const Completed = mongoose.model("Completed",completedSchema);

module.exports = Completed;