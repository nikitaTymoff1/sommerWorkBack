const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

var app = express();

require('./config/database');
require('./models/user');
require('./models/tourist');
require('./models/country');
require('./models/city');
require('./models/hotel');
require('./models/excursion');
require('./models/tour');
require('./models/airlineCompany');
require('./models/busCompany');
require('./models/log');

require('./config/passport')(passport);

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

app.listen(process.env.PORT || 5000);
