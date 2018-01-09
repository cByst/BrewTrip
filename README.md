# BrewTrip
A Express/React/Redux app that uses the google maps api to help you find all of the breweries x miles off your route.

1. git clone the repo: https://github.com/cByst/BrewTrip.git 
2. Run "npm install" to install
3. Create config.js in the route directory that looks like:
    ```javascript
    const config = {
        googlemapskey: "GoogleMapsApiKeyHere",
    };

    module.exports = config;
    ```
4. Build the client from the root directory with: "./node_modules/webpack/bin/webpack.js -p" 
5. Start the web server with: "npm start"
