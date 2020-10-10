const mongoose = require('mongoose');

const ConsoleSchema = new mongoose.Schema({
    title: {type: String, default: 'Console'},
    owner: String,
    type: String
});

mongoose.model('Console', ConsoleSchema);
