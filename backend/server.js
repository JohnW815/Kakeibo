const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

const diaryRoute = require('./routes/diaryRoute');
const userRoute = require('./routes/userRoute');

const app = express();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: true,
}))

//diary route
app.use('/diary', diaryRoute);
app.use('/user', userRoute);

const dbURI = 'mongodb+srv://wongsm041121:031301abc@kakeibo.0sffd.mongodb.net/kakeibo?retryWrites=true&w=majority&appName=Kakeibo';
mongoose.connect(dbURI)
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));