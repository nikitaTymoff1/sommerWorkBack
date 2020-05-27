const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/courseBase', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('Database connected');
});
