const mongoose = require('mongoose');

const ComputerSchema = new mongoose.Schema({
    title: {type: String, default: 'Computer'},
    owner: String,
    specs: String
});

mongoose.model('Computer', ComputerSchema);
