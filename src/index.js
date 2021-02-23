const server = require('./server');

// port on which the server will run
const port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log(`🚀  Server is running on port ${port}`);
});