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
- Register the subscriber endpoint [http://localhost:9000/endpoint](http://localhost:9000/endpoint) under the topic `topic`  
    ![test2](https://user-images.githubusercontent.com/6097630/108974636-efc00980-7685-11eb-863e-54686ebe0d57.png)
- Publish a message to the topic `topic`  
    ![test3](https://user-images.githubusercontent.com/6097630/108974768-0e260500-7686-11eb-9bbf-397714fa58cd.png)
- Check the terminal running the subscriber server to see the same message printed out  
    ![test5](https://user-images.githubusercontent.com/6097630/108978023-74605700-7689-11eb-8d74-c017a3ba2d31.png)

To test this using the actual server, use [https://pangaea-publisher-server.herokuapp.com/](https://pangaea-publisher-server.herokuapp.com/)
instead of [http://localhost:8000](http://localhost:8000), and register a subscriber that can be reached via the internet.

# Documentation

## Create a subscription

### Request

Send a `POST` request to `/subscribe/{topic}`.

The body of the `POST` request should contain the following fields:

- `url`: the endpoint being subscribed to the specified topic.

### Response

A successful request has `url` set to the specified endpoint, and `topic` set to the specified topic.

```json
{
    "url": "http://localhost:9000/endpoint",
    "topic": "topic"
}
```

A failed request has `error` set to the reason for the failure.

```json
{
    "error": "can not create this subscription at this time"
}
```

## Publish message to topic

### Request

Send a `POST` request to `/publish/{topic}`.

The body of the `POST` request should contain a valid JavaScript object.
The entire object will be published to all subscribers for the specified topic.

### Response

A successful request has `message` stating how many subscribers were published to.

```json
{
    "message": "Message published to 1 subscriber(s)"
}
```

A failed request has `error` set to the reason for the failure.

```json
{
    "error": "can not publish this message at this time"
}
```

### Payload sent to subscribers

A `POST` request is sent to every subscriber for the specified topic.

The body of the `POST` request contains the following fields:

- `topic`: the specified topic.
- `data`: the message published to the topic