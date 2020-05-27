const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    name:String,
    userId: String,
    date: String,
    role: String
});

mongoose.model('Log', LogSchema);
