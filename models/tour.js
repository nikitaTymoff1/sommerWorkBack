const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: {type: String, default: 'Tour'},
    tourists: Array,
    Country: String,
    City: String,
    Hotel: String,
    Excursions: Object,
    arrival: String,
    departure: String,
    way: String,
});

mongoose.model('Tour', TourSchema);
