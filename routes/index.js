const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/tour', require('./tour'));
router.use('/crud', require('./crud'));
module.exports = router;
