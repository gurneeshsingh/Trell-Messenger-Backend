const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config()
// importing routes
const userRoute = require('./routes/userRoute');
const chatRoute = require('./routes/chatRoute');
const messageRoute = require('./routes/messageRoute');


// using middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// linking the routes
app.use('/api/user', userRoute);
app.use('/api/chat', chatRoute)
app.use('/api/chat/message', messageRoute)



module.exports = app;
