const mongoose = require('mongoose');

const ComputerClubSchema = new mongoose.Schema({
    title: {type: String, default: 'ComputerClub'},
    location: String,
    area: Number,
    numberOfPCs: Number,
    numberOfConsoles: Number,
    bar: String,
    smokingPlace: String,
    stuffNumber: Number,
    maximumCapacity: Number
});

mongoose.model('ComputerClub', ComputerClubSchema);
