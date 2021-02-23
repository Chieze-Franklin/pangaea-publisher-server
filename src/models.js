const mongoose = require('mongoose');

// subscription schema
const subscriptionSchema = mongoose.Schema({
    topic: String,
    url: String,
});

module.exports = {
    subscription: mongoose.model('subscription', subscriptionSchema)
}
