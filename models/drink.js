const mongoose = require('mongoose');

const DrinkSchema = new mongoose.Schema({
    title: {type: String, default: 'Drink'},
    type: String,
    volume: Number,
    price: Number,
});

mongoose.model('Drink', DrinkSchema);
