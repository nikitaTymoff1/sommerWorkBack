const mongoose = require('mongoose');
const router = require('express').Router();
const utils = require('../lib/utils');
const Tourist = mongoose.model('Tourist');
const Country = mongoose.model('Country');
const User = mongoose.model('User');
const City = mongoose.model('City');
const Excursion = mongoose.model('Excursion');
const Hotel = mongoose.model('Hotel');
const Tour = mongoose.model('Tour');
const AirlineCompany = mongoose.model('AirlineCompany');
const BusCompany = mongoose.model('BusCompany');
const Log = mongoose.model('Log');
//-------------TOURIST---------------------------------
router.post('/createTourist', (req, res, next) => {
    const newTourist = new Tourist(req.body);
    newTourist.save()
        .then(tourist => {
            console.log('+1 tourist')
            res.json({success: true, tourist: tourist})
        })
        .catch(err => next(err));
});
router.get('/getTourist', (req, res, next) => {
        Tourist.find({}, (err, tourists) => {
            let TouristsMap = [];
            tourists.forEach((tourist, index) => {
                TouristsMap[index] = tourist;
            });
            return res.json(TouristsMap);
        })
            .catch(err => next(err));
});

router.put('/updateTourist', (req, res, next) => {
    const id = req.query.id;
    Tourist.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteTourist', (req, res, next) => {
    const id = req.query.id;
    Tourist.findByIdAndRemove(id)
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

//-------------COUNTRY---------------------------------
router.post('/createCountry', (req, res, next) => {
    const newCountry = new Country(req.body);
    newCountry.save()
        .then(tourist => {
            console.log('+1 country')
            return res.json({success: true, user: tourist})
        })
        .catch(err => next(err));
});
router.get('/getCountry', (req, res, next) => {
        Country.find({}, (err, countries) => {
            let CountryMap = [];
            countries.forEach((country, index) => {
                CountryMap[index] = country;
            });
            res.json(CountryMap);
        })
            .catch(err => next(err));
});

router.put('/updateCountry', (req, res, next) => {
    const id = req.query.id;
    Country.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteCountry', (req, res, next) => {
    const id = req.query.id;
    Country.findByIdAndRemove(id)
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
//-------------CITY---------------------------------
router.post('/createCity', (req, res, next) => {
    const newCity = new City(req.body);
    newCity.save()
        .then(city => {
            console.log('+1 city')
            return res.json({success: true, city: city})
        })
        .catch(err => next(err));
});
router.get('/getCity', (req, res, next) => {
        City.find({}, (err, cities) => {
            let CityMap = [];
            cities.forEach((city, index) => {
                CityMap[index] = city;
            });
            res.json(CityMap);
        })
            .catch(err => next(err));
});

router.put('/updateCity', (req, res, next) => {
    const id = req.query.id;
    City.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteCity', (req, res, next) => {
    const id = req.query.id;
    City.findByIdAndRemove(id)
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
//----------------EXCURSION-----------------------
router.post('/createExcursion', (req, res, next) => {
    const newExcursion = new Excursion(req.body);
    newExcursion.save()
        .then(excursion => {
            console.log('+1 excursion')
            return res.json({success: true, excursion: excursion})
        })
        .catch(err => next(err));
});
router.get('/getExcursion', (req, res, next) => {
        Excursion.find({}, (err, excursions) => {
            let ExcursionMap = [];
            excursions.forEach((excursion, index) => {
                ExcursionMap[index] = excursion;
            });
            res.json(ExcursionMap);
        })
            .catch(err => next(err));
});

router.put('/updateExcursion', (req, res, next) => {
    const id = req.query.id;
    Excursion.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteExcursion', (req, res, next) => {
    const id = req.query.id;
    Excursion.findByIdAndRemove(id)
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
//----------------BUS-COMPANY---------------------
router.post('/createBusCompany', (req, res, next) => {
    const newBusCompany = new BusCompany(req.body);
    newBusCompany.save()
        .then(busCompany => {
            console.log('+1 busCompany')
            return res.json({success: true, busCompany: busCompany})
        })
        .catch(err => next(err));
});
router.get('/getBusCompany', (req, res, next) => {
        BusCompany.find({}, (err, busCompanies) => {
            let BusCompanyMap = [];
            busCompanies.forEach((busCompany, index) => {
                BusCompanyMap[index] = busCompany;
            });
            res.json(BusCompanyMap);
        })
            .catch(err => next(err));
});

router.put('/updateBusCompany', (req, res, next) => {
    const id = req.query.id;
    BusCompany.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteBusCompany', (req, res, next) => {
    const id = req.query.id;
    BusCompany.findByIdAndRemove(id)
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
router.post('/createAirlineCompany', (req, res, next) => {
    const newAirlineCompany = new AirlineCompany(req.body);
    newAirlineCompany.save()
        .then(airlineCompany => {
            console.log('+1 airlineCompany')
            return res.json({success: true, airlineCompany: airlineCompany})
        })
        .catch(err => next(err));
});
router.get('/getAirlineCompany', (req, res, next) => {
        AirlineCompany.find({}, (err, airlineCompanies) => {
            let AirlineCompanyMap = [];
            airlineCompanies.forEach((airlineCompany, index) => {
                AirlineCompanyMap[index] = airlineCompany;
            });
            res.json(AirlineCompanyMap);
        })
            .catch(err => next(err));
});

router.put('/updateAirlineCompany', (req, res, next) => {
    const id = req.query.id;
    AirlineCompany.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteAirlineCompany', (req, res, next) => {
    const id = req.query.id;
    AirlineCompany.findByIdAndRemove(id)
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
//----------------HOTEL---------------------------
router.post('/createHotel', (req, res, next) => {
    const newHotel = new Hotel(req.body);
    newHotel.save()
        .then(hotel => {
            console.log('+1 hotel')
            return res.json({success: true, hotel: hotel})
        })
        .catch(err => next(err));
});
router.get('/getHotel', (req, res, next) => {
        Hotel.find({}, (err, hotels) => {
            let HotelMap = [];
            hotels.forEach((hotel, index) => {
                HotelMap[index] = hotel;
            });
            res.json(HotelMap);
        })
            .catch(err => next(err));
});

router.put('/updateHotel', (req, res, next) => {
    const id = req.query.id;
    Hotel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteHotel', (req, res, next) => {
    const id = req.query.id;
    Hotel.findByIdAndRemove(id)
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
//----------------TOUR----------------------------
router.post('/createTour', (req, res, next) => {
    const newTour = new Tour(req.body);
    newTour.save()
        .then(tour => {
            console.log('+1 tour')
            return res.json({success: true, tour: tour})
        })
        .catch(err => next(err));
});
router.get('/getTour', (req, res, next) => {
        Tour.find({}, (err, tours) => {
            let TourMap = [];
            tours.forEach((tour, index) => {
                TourMap[index] = tour;
            });
            res.json(TourMap);
        })
            .catch(err => next(err));
});

router.put('/updateTour', (req, res, next) => {
    const id = req.query.id;
    Tour.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
        })
});

router.delete('/deleteTour', (req, res, next) => {
    const id = req.query.id;
    Tour.findByIdAndRemove(id)
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
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
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
    Log.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update with id=${id}.`
                });
            } else res.send({ message: "was updated successfully." });
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
