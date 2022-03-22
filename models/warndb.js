const mongoose = require('mongoose')

const prefix = new mongoose.Schema({
    guild: String,
    user: String,
    content: Array //lets try again
})

module.exports = mongoose.model("prefix", prefix);