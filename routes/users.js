const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const Log = mongoose.model('Log');
const utils = require('../lib/utils');
const passport = require('passport')

router.get('/user', utils.jwtAuth, (req, res, next) => {
    res.status(200).json({success: true, user: req.user, msg: 'authorized'});
});
router.get('/', utils.jwtAuth, (req, res, next) => {
    User.find({}, function(err, users) {
        let userMap = [];
        users.forEach((user,index) => {
            let clone = JSON.parse(JSON.stringify(user));
            delete clone.hash
            delete clone.salt
            delete clone.__v
            delete clone._id
            userMap[index] = clone;
        });
        res.json(userMap);
    });
});
router.get('/checkJwt', utils.jwtAuth, (req, res, next) => {
    res.send(true);
});

router.post('/login', function (req, res, next) {
    User.findOne({username: req.body.username})
        .then((user) => {
            if (!user) {
                return res.status(401).json({success: false, msg: "could not find user"})
            }
            const isValid = utils.validPassword(req.body.password, user.hash, user.salt);

            if (isValid) {
                const newLog = new Log({
                    userId: user._id,
                    date: new Date(),
                    name: user.name,
                    role: user.role,
                });

                newLog.save()
                    .then(user => {
                       console.log("+1 log")
                    })
                    .catch(err => next(err));

                const jwt = utils.issueJWT(user);
                res.json({success: true, user: user, token: jwt.token, expiresIn: jwt.expires})
            } else {
                res.status(401).json({success: false, msg: "you entered the wrong password"})
            }
        })
        .catch((err) => {
            next(err)
        })
});

router.post('/register', function (req, res, next) {
    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            return res.status(401).json({success: false, msg: "Login or email already in use"});
        } else {
            User.findOne( {email: req.body.email}).then(user => {
                if (user) {
                    return res.status(401).json({success: false, msg: "Login or email already in use"});
                } else {
                    const saltHash = utils.genPassword(req.body.password)
                    const salt = saltHash.salt;
                    const hash = saltHash.hash;

                    const newUser = new User({
                        username: req.body.username,
                        email: req.body.email,
                        name: req.body.name,
                        surname: req.body.surname,
                        role: 'user',
                        hash: hash,
                        salt: salt
                    });
                    newUser.save()
                        .then(user => {
                            const jwt = utils.issueJWT(user)
                            res.json({success: true, user: user, token: jwt.token, expiresIn: jwt.expires})
                        })
                        .catch(err => next(err));
                }
            })
        }

    })
})


module.exports = router;
