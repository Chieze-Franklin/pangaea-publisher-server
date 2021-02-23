const router = require('express').Router();
const controllers = require('./controllers');

router.post('/subscribe/:topic', controllers.createSubscription);

router.post('/publish/:topic', controllers.publishMessage);

module.exports = router;