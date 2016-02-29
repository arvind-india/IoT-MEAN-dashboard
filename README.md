#IoT Express Heads Up Display:
## a node/Express based Web Server created simulate a live data feed from an IoT device.
This app is intended to live on a server where it will provide a live stream of
randomly generated data meant to simulate sensor readings.

This project was initiated from Yeoman with the ['generator-express'](https://github.com/petecoop/generator-express) generator module.


### Key components, modules,  dependencies:
- node js
- Express server
- mongoDB
- socket.io web sockets


### Prerequisites
- Git
- Node.js and npm Node ^4.2.3, npm ^2.14.7
- Bower (npm install --global bower)
- Ruby and then gem install sass
- Gulp (npm install --global gulp)
- MongoDB - Keep a running daemon with $`mongod`

### Developing
- Run npm install to install server dependencies.
- Run bower install to install front-end dependencies.
- Run mongod in a separate shell to keep an instance of the MongoDB Daemon running
- Run gulp serve to start the development server. It should automatically open the client in your browser when ready.

### Directions for use:
- This code base was created with the intent of hosting online with digitial ocean
on Dokku.  It can be run locally with the same effect
- There are two parts, the web server and a stand alone client. (client.js)
- fork and then clone this repo locally
- $`npm install`
- Fire up mongoDB from shell with $`mongod` before starting app.
- To start the app use $`gulp` from within the project directory.  This should precompile
all asets and launch the welcome page in your browser on port 3000.  The welcome
page serves only to let the user know that the server is up.
- At this point you will see a series of diagnostic and informative
logs in your console. The server starts to transmit the mock sensor data only
on connection and while connected to a client.
- To test the functionality of the websockets open a new terminal window and then start the client with $`node client.js`
If both client and server are functional the server will begin to emmit mock
sensor data.  The terminals will log the back and forth.

## Testing
-Tests are written with mocha.
-Install: npm install -g mocha
-Run: $`mocha` or `npm test`

#### Source Links

- https://github.com/petecoop/generator-express
-
