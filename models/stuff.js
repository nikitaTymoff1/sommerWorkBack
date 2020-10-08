const mongoose = require('mongoose');

const StuffSchema = new mongoose.Schema({
    title: {type: String, default: 'Stuff'},
    name: String,
    surname: String,
    age: String,
    gender: String,
    email: String,
    phoneNumber: String,
    workplace: String,
    job: String,
});

mongoose.model('Stuff', StuffSchema);
