const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/endpoint', (req, res) => {
    console.log(req.body);

    res.send();
});

app.listen(9000, function () {
    console.log(`🚀  Subscriber is running on port ${9000}`);
});
