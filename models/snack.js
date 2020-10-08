const mongoose = require('mongoose');

const SnackSchema = new mongoose.Schema({
    title: {type: String, default: 'Snack'},
    type: String,
    mass: Number,
    price: Number,
});

mongoose.model('Snack', SnackSchema);
