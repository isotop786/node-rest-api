const express = require('express');
const morgan = require('morgan')
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const jsonParse = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false})


// database connection
const db = require('./db');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(urlencodedParser)


//// Middlewares must be declared before routes otherwise middleware won't be applied in the application
 
//imports from files
const postRoutes = require('./routes/post');


//routes   

app.use('/',postRoutes);
// app.use('/',jsonParse,urlencodedParser,postRoutes);


// app.use(express.bodyParser())



app.listen(process.env.PORT||80);