const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environment variables
require('dotenv').config();

// Express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Setting up Socket.io
const http = require('http').createServer(app);
const io = require('socket.io')(http, { cors: { origin: "*" } });

// Controllers
const startGameRouter = require('./controllers/startGame');
const continueGameRouter = require('./controllers/continueGame');
const endGameRouter = require('./controllers/endGame');

// Socket.io
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('start game', (info) => {
        console.log(info);
    });

    socket.on('continue game', (info) => {
        console.log(info);
    });

    socket.on('end game', (info) => {
        console.log(info);
    });
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

//route home
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
http.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});