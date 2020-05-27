const mongoose = require('mongoose');

const AirlineCompanySchema = new mongoose.Schema({
    title: {type: String, default: 'AirlineCompany'},
    name: String,
    numberOfAirports: Number,
    numberOfPlanes: Number,
    rating: String,
    budget: String,
});

mongoose.model('AirlineCompany', AirlineCompanySchema);
