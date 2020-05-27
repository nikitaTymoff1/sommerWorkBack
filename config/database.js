const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://nikita:nikita@cluster0-nzp25.gcp.mongodb.net/courseBase', {useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('Database connected');
});
