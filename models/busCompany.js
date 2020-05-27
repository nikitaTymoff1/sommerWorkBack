const mongoose = require('mongoose');

const BusCompanySchema = new mongoose.Schema({
    title: {type: String, default: 'BusCompany'},
    name: String,
    numberOfBusStations: Number,
    numberOfBuses: Number,
    rating: String,
    budget: String,
});

mongoose.model('BusCompany', BusCompanySchema);
