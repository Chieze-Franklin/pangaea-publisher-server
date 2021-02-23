const router = require('express').Router();
const controllers = require('./controllers');

router.get('/', function (req, res) {
    res.json({
        message: 'Hello, world!'
    });
});

router.post('/subscribe/:topic', controllers.createSubscription);

router.post('/publish/:topic', controllers.publishMessage);

module.exports = router;