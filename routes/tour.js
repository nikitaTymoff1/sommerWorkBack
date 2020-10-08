// const mongoose = require('mongoose');
// const router = require('express').Router();
//
// const Tourist = mongoose.model('Tourist');
// const Country = mongoose.model('Country');
// const City = mongoose.model('City');
// const Excursion = mongoose.model('Excursion');
// const Hotel = mongoose.model('Hotel');
// const Tour = mongoose.model('Tour');
// const AirlineCompany = mongoose.model('AirlineCompany');
// const BusCompany = mongoose.model('BusCompany');
//
// //-------------TOURIST---------------------------------
// router.post('/createTourist', (req, res, next) => {
//     req.body.forEach(item => {
//         const newTourist = new Tourist(item);
//         newTourist.save()
//             .then(tourist => {
//                 console.log('+1 tourist')
//                 res.json({success: true})
//             })
//             .catch(err => next(err));
//     })
// });
// //-------------COUNTRY---------------------------------
// router.get('/getCountry', (req, res, next) => {
//     Country.find({}, (err, countries) => {
//         let CountryMap = [];
//         countries.forEach((country, index) => {
//             CountryMap[index] = country;
//         });
//         res.json(CountryMap);
//     })
//         .catch(err => next(err));
// });
// //-------------CITY-----------------------------------
// router.get('/getCity', (req, res, next) => {
//     City.find({}, (err, cities) => {
//         let CityMap = [];
//         cities.forEach((city, index) => {
//             CityMap[index] = city;
//         });
//         res.json(CityMap);
//     })
//         .catch(err => next(err));
// });
// //----------------EXCURSION-----------------------
// router.get('/getExcursion', (req, res, next) => {
//     Excursion.find({}, (err, excursions) => {
//         let ExcursionMap = [];
//         excursions.forEach((excursion, index) => {
//             ExcursionMap[index] = excursion;
//         });
//         res.json(ExcursionMap);
//     })
//         .catch(err => next(err));
// });
// //----------------BUS-COMPANY---------------------
// router.get('/getBusCompany', (req, res, next) => {
//     BusCompany.find({}, (err, busCompanies) => {
//         let BusCompanyMap = [];
//         busCompanies.forEach((busCompany, index) => {
//             BusCompanyMap[index] = busCompany;
//         });
//         res.json(BusCompanyMap);
//     })
//         .catch(err => next(err));
// });
// //----------------AIRLINE-COMPANY-----------------
// router.get('/getAirlineCompany', (req, res, next) => {
//     AirlineCompany.find({}, (err, airlineCompanies) => {
//         let AirlineCompanyMap = [];
//         airlineCompanies.forEach((airlineCompany, index) => {
//             AirlineCompanyMap[index] = airlineCompany;
//         });
//         res.json(AirlineCompanyMap);
//     })
//         .catch(err => next(err));
// });
// //----------------HOTEL---------------------------
// router.get('/getHotel', (req, res, next) => {
//     Hotel.find({}, (err, hotels) => {
//         let HotelMap = [];
//         hotels.forEach((hotel, index) => {
//             HotelMap[index] = hotel;
//         });
//         res.json(HotelMap);
//     })
//         .catch(err => next(err));
// });
// //----------------TOUR----------------------------
// router.post('/createTour', (req, res, next) => {
//     const tourists = req.body.tourists;
//     tourists.forEach(tourist => {
//         const newTourist = new Tourist(tourist);
//         newTourist.save()
//             .then(tourist => {
//                 console.log(`+1 tourist ${tourist.name}`)
//             })
//             .catch(err => next(err));
//     })
//     const newTour = new Tour(req.body);
//     newTour.save()
//         .then(tour => {
//             console.log('+1 tour')
//             return res.json({success: true, tour: tour})
//         })
//         .catch(err => next(err));
// });
// router.get('/findTour', (req, res, next) => {
//     let foundTour = [];
//     Tour.find({}, (err, tours) => {
//         tours.forEach((tour, index) => {
//             tour.tourists.forEach(tourist => {
//                 if (tourist.email === req.query.email)
//                      foundTour.push(JSON.parse(JSON.stringify(tour)))
//             })
//         })
//         if (foundTour.length) {
//             res.json({success: true, tour: foundTour})
//         } else {
//             res.json({success: false, msg: 'nonono'})
//         }
//     }).catch(err => next(err));
// })
//
//
// module.exports = router;
