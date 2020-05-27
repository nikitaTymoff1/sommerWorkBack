const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    title: {type: String, default: 'City'},
    country: String,
    name: String,
    sea: String,
    amountOfHotels: Number,
    amountOfExcursions: Number
});

mongoose.model('City', CitySchema);
