const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

// const port = 3003; 
const port = process.env.PORT || 3003; 
// process is a variable automatically set (if n/a use 3003)
// The highlighted line will take the value of the PORT if it’s available or default to 3003 as a fallback port to listen on. 

// db block, calling the connect method of db.js, then using express to get the data
// NB find() and toArray() are Mongo methods. We are in a node environment
db.connect().then(dbo => {
    // Fetch (from Gallery)
    app.get('/rest/shows', (req,res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });
    // Fetch (from Details)
    app.get('/rest/shows/:id', (req,res) => {
        dbo.collection('shows').findOne({ id: req.params.id }, (err, doc) => {
            if (err) throw err;
            res.send(doc);
        });
    });

    // serve static files
    app.use(express.static(path.join(__dirname, '../../build')));

    // serve index.html on all routes - strategy to make reloads work on all (not "/") routes with react 'BrowserRouter'
    app.get('*', function (_req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
    
    app.listen(port, () => console.log(`Backend app listening on port ${port}!`));

})

// data from backend (pre db solution)

// const getShows = require('./shows');
// app.get('/rest/shows', (req, res) => res.send(getShows()));


// Notes: 
// app has been set to 'express'
// express creates an http get request, from relative path - it could support an absolute path, by importing a middleware
// function with two parameters: request and response
// send acts as a display. send (to the browser)
// get, put, delete and post (and patch), the HTTP Methods for RESTful Services, are a bit like CRUD

/*

This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by RunKit, which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser. Below are instructions for running the same app on your local machine.

RunKit is a third-party service not affiliated with the Express project.

*/
