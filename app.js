const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

var app = express();

require('./config/database');
require('./models/user');
require('./models/prices');
require('./models/drink');
require('./models/console');
require('./models/food');
require('./models/snack');
require('./models/stuff');
require('./models/computerClub');
require('./models/computer');
require('./models/log');

require('./config/passport')(passport);
app.use(
    cors({
        allowedHeaders: ["Content-Type", "Authorization"],
        origin: "*",
        methods: [`GET`, `POST`, `PUT`, `DELETE`]
    })
);

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

app.listen(process.env.PORT || 5000);
