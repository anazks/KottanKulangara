const mongoose = require("mongoose");
const newsModel = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("newsModel", newsModel);