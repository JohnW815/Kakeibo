const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const router = require('./routes/router');
const Diary = require('./models/diary');

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionuccessStatus: 200
};
app.use(cors());

const dbURI = 'mongodb+srv://wongsm041121:031301abc@kakeibo.0sffd.mongodb.net/kakeibo?retryWrites=true&w=majority&appName=Kakeibo';
mongoose.connect(dbURI)
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));

app.get('/add-diary', (req, res) => {
    const diary = new Diary({
        title: 'new diary',
        snippet: 'about my diary',
        body: 'more and more'
    })

    diary.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/all-diaries', (req, res) => {
    Diary.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-diary', (req, res) => {
    Diary.findById('67135d2829679aef0ebefee3')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));