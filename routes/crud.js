const mongoose = require('mongoose');
const router = require('express').Router();
const utils = require('../lib/utils');
const ComputerClub = mongoose.model('ComputerClub');
const Computer = mongoose.model('Computer');
const User = mongoose.model('User');
const Console = mongoose.model('Console');
const Drink = mongoose.model('Drink');
const Food = mongoose.model('Food');
const Snack = mongoose.model('Snack');
const Prices = mongoose.model('Prices');
const Stuff = mongoose.model('Stuff');
const Log = mongoose.model('Log');
//-------------ComputerClub---------------------------------
router.post('/createComputerClub', (req, res, next) => {
    const newComputerClub = new ComputerClub(req.body);
    newComputerClub.save()
        .then(ComputerClub => {
            console.log('+1 ComputerClub')
            res.json({success: true, ComputerClub: ComputerClub})
        })
        .catch(err => next(err));
});
router.get('/getComputerClub', (req, res, next) => {
    ComputerClub.find({}, (err, ComputerClubs) => {
        let ComputerClubsMap = [];
        ComputerClubs.forEach((ComputerClub, index) => {
            ComputerClubsMap[index] = ComputerClub;
        });
        return res.json(ComputerClubsMap);
    })
        .catch(err => next(err));
});

router.put('/updateComputerClub', (req, res, next) => {
    const id = req.query.id;
    ComputerClub.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteComputerClub', (req, res, next) => {
    const id = req.query.id;
    ComputerClub.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});

//-------------Computer---------------------------------
router.post('/createComputer', (req, res, next) => {
    const newComputer = new Computer(req.body);
    newComputer.save()
        .then(computer => {
            console.log('+1 computer')
            return res.json({success: true, user: computer})
        })
        .catch(err => next(err));
});
router.get('/getComputer', (req, res, next) => {
    Computer.find({}, (err, countries) => {
        let ComputerMap = [];
        countries.forEach((computer, index) => {
            ComputerMap[index] = computer;
        });
        res.json(ComputerMap);
    })
        .catch(err => next(err));
});

router.put('/updateComputer', (req, res, next) => {
    const id = req.query.id;
    Computer.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteComputer', (req, res, next) => {
    const id = req.query.id;
    Computer.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//-------------Console---------------------------------
router.post('/createConsole', (req, res, next) => {
    const newConsole = new Console(req.body);
    newConsole.save()
        .then(console => {
            console.log('+1 console')
            return res.json({success: true, console: console})
        })
        .catch(err => next(err));
});
router.get('/getConsole', (req, res, next) => {
    Console.find({}, (err, consoles) => {
        let ConsoleMap = [];
        consoles.forEach((console, index) => {
            ConsoleMap[index] = console;
        });
        res.json(ConsoleMap);
    })
        .catch(err => next(err));
});

router.put('/updateConsole', (req, res, next) => {
    const id = req.query.id;
    Console.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteConsole', (req, res, next) => {
    const id = req.query.id;
    Console.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------Drink-----------------------
router.post('/createDrink', (req, res, next) => {
    const newDrink = new Drink(req.body);
    newDrink.save()
        .then(drink => {
            console.log('+1 drink')
            return res.json({success: true, drink: drink})
        })
        .catch(err => next(err));
});
router.get('/getDrink', (req, res, next) => {
    Drink.find({}, (err, drinks) => {
        let DrinkMap = [];
        drinks.forEach((drink, index) => {
            DrinkMap[index] = drink;
        });
        res.json(DrinkMap);
    })
        .catch(err => next(err));
});

router.put('/updateDrink', (req, res, next) => {
    const id = req.query.id;
    Drink.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteDrink', (req, res, next) => {
    const id = req.query.id;
    Drink.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------stuff---------------------
router.post('/createStuff', (req, res, next) => {
    const newStuff = new Stuff(req.body);
    newStuff.save()
        .then(stuff => {
            console.log('+1 stuff')
            return res.json({success: true, stuff: stuff})
        })
        .catch(err => next(err));
});
router.get('/getStuff', (req, res, next) => {
    Stuff.find({}, (err,stuffs) => {
        let StuffMap = [];
        stuffs.forEach((stuff, index) => {
            StuffMap[index] = stuff;
        });
        res.json(StuffMap);
    })
        .catch(err => next(err));
});

router.put('/updateStuff', (req, res, next) => {
    const id = req.query.id;
    Stuff.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteStuff', (req, res, next) => {
    const id = req.query.id;
    Stuff.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------AIRLINE-COMPANY-----------------
router.post('/createPrices', (req, res, next) => {
    const newPrices = new Prices(req.body);
    newPrices.save()
        .then(prices => {
            console.log('+1 prices')
            return res.json({success: true, prices: prices})
        })
        .catch(err => next(err));
});
router.get('/getPrices', (req, res, next) => {
    Prices.find({}, (err, airlineCompanies) => {
        let PricesMap = [];
        airlineCompanies.forEach((prices, index) => {
            PricesMap[index] = prices;
        });
        res.json(PricesMap);
    })
        .catch(err => next(err));
});

router.put('/updatePrices', (req, res, next) => {
    const id = req.query.id;
    Prices.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deletePrices', (req, res, next) => {
    const id = req.query.id;
    Prices.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------Food---------------------------
router.post('/createFood', (req, res, next) => {
    const newFood = new Food(req.body);
    newFood.save()
        .then(food => {
            console.log('+1 food')
            return res.json({success: true, food: food})
        })
        .catch(err => next(err));
});
router.get('/getFood', (req, res, next) => {
    Food.find({}, (err, foods) => {
        let FoodMap = [];
        foods.forEach((food, index) => {
            FoodMap[index] = food;
        });
        res.json(FoodMap);
    })
        .catch(err => next(err));
});

router.put('/updateFood', (req, res, next) => {
    const id = req.query.id;
    Food.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteFood', (req, res, next) => {
    const id = req.query.id;
    Food.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------Snack----------------------------
router.post('/createSnack', (req, res, next) => {
    const newSnack = new Snack(req.body);
    newSnack.save()
        .then(snack => {
            console.log('+1 snack')
            return res.json({success: true, snack: snack})
        })
        .catch(err => next(err));
});
router.get('/getSnack', (req, res, next) => {
    Snack.find({}, (err, snacks) => {
        let SnackMap = [];
        snacks.forEach((snack, index) => {
            SnackMap[index] = snack;
        });
        res.json(SnackMap);
    })
        .catch(err => next(err));
});

router.put('/updateSnack', (req, res, next) => {
    const id = req.query.id;
    Snack.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteSnack', (req, res, next) => {
    const id = req.query.id;
    Snack.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------USER----------------------------
router.post('/createUser', (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(user => {
            console.log('+1 User')
            return res.json({success: true, user: user})
        })
        .catch(err => next(err));
});
router.get('/getUser', (req, res, next) => {
    User.find({}, (err, users) => {
        let UserMap = [];
        users.forEach((user, index) => {
            UserMap[index] = user;
        });
        res.json(UserMap);
    })
        .catch(err => next(err));
});

router.put('/updateUser', (req, res, next) => {
    const id = req.query.id;
    User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteUser', (req, res, next) => {
    const id = req.query.id;
    User.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
//----------------USER----------------------------
router.post('/createLog', (req, res, next) => {
    const newLog = new Log(req.body);
    newLog.save()
        .then(log => {
            console.log('+1 Log')
            return res.json({success: true, log: log})
        })
        .catch(err => next(err));
});
router.get('/getLog', (req, res, next) => {
    Log.find({}, (err, logs) => {
        let LogMap = [];
        logs.forEach((log, index) => {
            LogMap[index] = log;
        });
        res.json(LogMap);
    })
        .catch(err => next(err));
});

router.put('/updateLog', (req, res, next) => {
    const id = req.query.id;
    Log.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({message: "was updated successfully."});
        })
});

router.delete('/deleteLog', (req, res, next) => {
    const id = req.query.id;
    Log.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete with id=${id}.`
                });
            } else {
                res.send({
                    message: "was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete with id=" + id
            });
        });
});
module.exports = router;
