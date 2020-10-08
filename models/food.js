const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    title: {type: String, default: 'Food'},
    type: String,
    mass: Number,
    price: Number,
});

mongoose.model('Food', FoodSchema);
