const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    completed: {type: Boolean, default: false}
});

module.exports = Todo = mongoose.model('Todo', schema);
