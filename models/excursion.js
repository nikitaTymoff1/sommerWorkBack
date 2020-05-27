const mongoose = require('mongoose');

const ExcursionSchema = new mongoose.Schema({
    title: {type: String, default: 'Excursion'},
    city: String,
    name: String,
    stars: Number,
    hours: String,
    rating: String,
    description: String
});

mongoose.model('Excursion', ExcursionSchema);
