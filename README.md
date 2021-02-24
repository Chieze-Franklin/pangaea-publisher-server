# pangaea-publisher-server

A simple pub-sub server that allows you to register subscribers for topics, and publish events to those subscribers.

The server is running at [https://pangaea-publisher-server.herokuapp.com/](https://pangaea-publisher-server.herokuapp.com/)

# Quick Start

- `npm i`
- Set the env variable `MONGODB_URL` to the appropriate connection string
- You can optionally set the env variable `PORT` to the port number you want the server to run un
- `npm run start:dev` for development
- `npm start` for production

By default the server starts at [http://localhost:8000](http://localhost:8000).

# Testing

To test this locally:

- `npm i`
- Ensure all environment variables have been set: `MONGODB_URL`, `PORT` (optional), `SUBSCRIBER_PORT` (optional)
- `npm run start-subscriber:dev` to start the subscriber server on port 9000 by default
- `npm run start:dev` to start the main server on port 8000 by default
    ![test1](https://user-images.githubusercontent.com/6097630/108974486-cb642d00-7685-11eb-8102-53e724b19a6a.png)
- Register the subscriber endpoint [http://localhost:9000/endpoint](http://localhost:9000/endpoint) under the topic `topic`.
    ![test2](https://user-images.githubusercontent.com/6097630/108974636-efc00980-7685-11eb-863e-54686ebe0d57.png)
- Publish a message to the topic `topic`.  
    ![test3](https://user-images.githubusercontent.com/6097630/108974768-0e260500-7686-11eb-9bbf-397714fa58cd.png)
- Check the terminal running the subscriber server to see the same message printed out.
    ![test4](https://user-images.githubusercontent.com/6097630/108974823-20a03e80-7686-11eb-9f63-e654510a64c9.png)

To test this using the actual server, use [https://pangaea-publisher-server.herokuapp.com/](https://pangaea-publisher-server.herokuapp.com/)
instead of [http://localhost:8000](http://localhost:8000), and register a subscriber that can be reached via the internet.

# Documentation