const express = require('express');
const app = express();
const path = require('path');

//const port = 3003;
const port = process.env.PORT || 3003;

const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.use(express.static(path.join(__dirname, './build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));

// app has been set to 'express'
// express creates an http get request, from rel. path - it could support an absolute path, by importing a middleware
// function with two parameters: request and response
// send acts as a display. send (to the browser)
// get, put, delete and post (and patch), the HTTP Methods for RESTful Services, are a bit like CRUD

/*

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by RunKit, which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser. Below are instructions for running the same app on your local machine.

RunKit is a third-party service not affiliated with the Express project.

*/