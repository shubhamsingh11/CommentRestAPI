const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Comment = require('./model/Comments');
require('dotenv').config();
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.use(cors());


app.get('/', (req, res) => {
    res.send("Hi There");
})

app.get('/comments', (req, res) => {
    const Comments = Comment.find()
        .then(data => res.json(data))
        .catch(err => console.error(err));

})

app.post('/comments', (req, res) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });

    comment.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.send(err.message)
        })
})

app.patch('/comments/:id', async (req, res) => {
    const ThatComment = await Comment.updateOne(
        { _id: req.params.id },
        { $set: { name: "Shubham S" } });
    
    try {
        res.json(ThatComment);  
    }
    catch {
        res.send(err.message)
    }
})

app.delete('/comments/:id', async (req, res) => {
    try {
        const removedComment = await Comment.deleteOne({ _id: req.params.id });
        res.json(removedComment);
    }
    catch(err) {
        res.json({ message: err });
    }
})


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch((error) => console.log(`${error} : did not connect`));


app.listen(9000 , () => console.log("Listening on 9000"))
