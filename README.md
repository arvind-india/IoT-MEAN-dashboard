#[IoT Express Dashboard](https://iot-express-dashboard.herokuapp.com/)
#### a NodeJS/Express based web server with browser based client created to receive, store and display a live data feed from a remote server.  The remote server emits a simulated IoT device data feed. The live connection is provided by [socket.io](www.socket.io).

##### View the live app at https://iot-express-dashboard.herokuapp.com/
##### The [webserver app](https://iot-sim.herokuapp.com/) is at https://iot-sim.herokuapp.com/
##### [Project GitHub Repo](https://github.com/thestevenbell/IoT-MEAN-dashboard) https://github.com/thestevenbell/IoT-MEAN-dashboard

### API
  - The RESTful endpoint is at https://iot-express-dashboard.herokuapp.com/weather.  It will accept .get requests only.
  - A curl request will return an array of JSON objects. ex. $ `curl https://iot-express-dashboard.herokuapp.com/weather`

### Process Documentation
- ![IoTdashboardAppplanning](/IoTdashplanning.jpg)
- ![IoTdashboardAppplanning](/IoTdashplanning2.jpg)
- ![IoTdashboardAppplanning](/IoTdashplanning3.jpg)
- ![IoTdashboardAppplanning](/IoTdashplanning4.jpg)

### Key components, modules,  dependencies:
- nodeJS
- Express server
- mongoDB
- AngularJS
- Bower front-end:
    - "dependencies": {
        - "angular": "^1.5.0",
        - "nvd3": "^1.8.2",
        - "d3": "^3.5.16",
        - "angular-nvd3": "^1.0.5",
        - "socket.io": "^1.4.5",
- Packages:
  - "dependencies": {
    - "body-parser": "^1.13.3",
    - "compression": "^1.5.2",
    - "cookie-parser": "^1.3.3",
    - "express": "^4.13.3",
    - "glob": "^6.0.4",
    - "jade": "^1.11.0",
    - "method-override": "^2.3.0",
    - "mongoose": "^4.1.2",
    - "morgan": "^1.6.1",
    - "serve-favicon": "^2.3.0",
    - "socket.io": "^1.4.5",
    - "socket.io-client": "^1.4.5"
    },
  - "devDependencies": {
      - "gulp": "^3.9.0",
      - "gulp-ruby-sass": "^2.0.1",
      - "gulp-nodemon": "^2.0.2",
      - "gulp-livereload": "^3.8.0",
      - "gulp-plumber": "^1.0.0"
     }
- Gulp
- Jade
- Hosted on Heroku
- This project was initiated from Yeoman with the ['generator-express'](https://github.com/petecoop/generator-express) generator module.
- d3 graphs ported for use in AngularJS were derived from work by [Konstantin Skipor](http://krispo.github.io/angular-nvd3/#/quickstart).
The examples were altered to derive graph data from the server data base and a live stream of simulated IoT sensor data delered in real
time via web sockets.
- SERVER SIDE ROUTER FILE is app/controllers/home.js


### Prerequisites
- Git
- Node.js and npm Node ^4.2.3, npm ^2.14.7
- Bower, $ `npm install --global bower`
- Ruby and then gem install sass
- Gulp, $ `npm install --global gulp`
- MongoDB, ensure a mongo daemon is running with $`mongod` to start mongo
(mongo does not start automatically on boot for most systems)

### Developing
- Run $ `npm install` to install server dependencies.
- Run $ `bower install` to install front-end dependencies.
- Run mongod in a separate terminal window/tab to keep an instance of the MongoDB Daemon running
- Run gulp serve to start the development server. It should automatically open the client in your browser when ready.


### Directions for use:
- This code base was created with the intent of hosting online with digitial ocean
on Dokku or Heroku. It can be run locally with the same effect
- There are two application required: the web server and a stand alone client.js
found in /simple-socket-example/client.js or the more complete app IoTExpress
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


### Notes and Gotchas:
- socket.io installs via bower into the components directory.  With this build
the required socket.io.js file for the front-end code in the index.html would
not load when served locally.  (this is likely due to a glob setting that I have yet
to track down to fix) The hack-around for this was to move the dependency
code to the client directory and source it from there.


## Testing
-Tests are written with mocha.
-Install: npm install -g mocha
-Run: $`mocha` or `npm test`

#### Source Links
- https://github.com/petecoop/generator-express
- www.socket.io

