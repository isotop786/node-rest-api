const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('DB is connected from db.js'))


mongoose.connection.on('error',(err)=>{
    console.log(`DB connetion is failed due to "${err}"`)
})