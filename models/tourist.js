const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
    email:String,
    name:String,
    surname:String,
    fathersName: String,
    dateOfBirth: String,
    passport: String
});

mongoose.model('Tourist', TouristSchema);
