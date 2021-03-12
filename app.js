const express = require('express');
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// database connection
const db = require('./db');

const bodyParser = require('body-parser');


 
//imports from files
const postRoutes = require('./routes/post');


//routes   

app.use('/post',postRoutes);

// middlewares
app.use(morgan('dev'));




app.listen(process.env.PORT||80);