const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email:String,
    name:String,
    surname:String,
    role: String,
    hash: String,
    salt: String
});

mongoose.model('User', UserSchema);
