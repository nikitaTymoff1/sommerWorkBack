const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    title: {type: String, default: 'Hotel'},
    name:String,
    city: String,
    stars: Number,
    pool: String,
    rating: String,
    breakfast: String
});

mongoose.model('Hotel', HotelSchema);
