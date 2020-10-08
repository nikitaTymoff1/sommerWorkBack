const mongoose = require('mongoose');

const ConsoleSchema = new mongoose.Schema({
    title: {type: String, default: 'Console'},
    owner: String,
    specs: String
});

mongoose.model('Console', ConsoleSchema);
