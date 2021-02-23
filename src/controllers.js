const models = require('./models');

// handle create subsciption
exports.createSubscription = function (req, res) {
    const { topic } = req.params;
    const { url } = req.body;

    models.subscription.create({ topic, url }, function (err, doc) {
        if (err) {
            return res.json({
                error: err.message
            });
        }

        res.json({
            url: doc.url,
            topic: doc.topic,
        });
    });
};

// handle publish message
exports.publishMessage = function (req, res) {
    const { topic } = req.params;
    const data = req.body;

    let filter = {
        topic
    };

    models.subscription.find(filter, function (err, docs) {
        if (err) {
            return res.json({
                error: err.message
            });
        }

        docs.forEach(doc => {
            const { url } = doc;
            // TODO: send POST to url with data
        });

        res.json({
            message: `Message published to ${docs.length} subscriber(s)`,
        });
    });
};
