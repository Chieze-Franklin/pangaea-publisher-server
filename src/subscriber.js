const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const port = process.env.SUBSCRIBER_PORT || 9000;

const app = express();

// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/endpoint', (req, res) => {
    console.log(req.body);

    res.send();
});

app.listen(port, function () {
    console.log(`🚀  Subscriber is running on port ${port}`);
});
