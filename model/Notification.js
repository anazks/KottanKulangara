const mongoose = require("mongoose");
const notification = new mongoose.Schema({
    notifications: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("notification", notification);