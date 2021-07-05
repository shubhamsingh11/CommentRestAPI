const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    name: { type: String, reqired: true },
    comment: { type: String, reqired: true },
    date : { type: Date, default: Date}
})

module.exports = mongoose.model('Comment', CommentSchema);