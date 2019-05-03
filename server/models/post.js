const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: String, required: true, unique: true, 
    },
    createdAt: { type: Date, require: true }
});

module.exports = mongoose.model('post', postSchema);