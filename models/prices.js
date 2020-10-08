const mongoose = require('mongoose');

const PricesSchema = new mongoose.Schema({
    type :String,
    perHour:Number,
    per3:Number,
    per6: Number,
    perDay: Number,
    perNight: Number
});

mongoose.model('Prices', PricesSchema);
