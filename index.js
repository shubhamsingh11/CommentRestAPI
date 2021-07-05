const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./model/Comments');
require('dotenv').config();
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({
    extended: true
  }));


app.get('/', (req, res) => {
    res.send("Hi There");
})

app.get('/comments', (req, res) => {
    res.send("Hi There Comments");
})

app.post('/comments', (req, res) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });
    // res.send(comment)
    comment.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err.message)
        })
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch((error) => console.log(`${error} : did not connect`));


app.listen(3000 , () => console.log("Listening on 3000"))
