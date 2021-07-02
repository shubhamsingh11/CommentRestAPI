const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//Middlewares
app.use('/comments', () => console.log('Comments') )


app.get('/', (req, res) => {
    res.send("Hi There");
})


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>console.log('DB Connected'))
app.listen(3000 , () => console.log("Listening on 3000"))
