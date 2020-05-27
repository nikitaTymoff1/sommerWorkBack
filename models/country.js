const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    title: {type: String, default: 'Country'},
    name: String,
    ocean: String,
    climate: String,
    freeVisa: String
});

mongoose.model('Country', CountrySchema);
