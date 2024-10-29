const express = require('express');
const router = express.Router();
const Diary = require('../models/diary')

router.post('/add', (req, res) => {
    const diary = new Diary({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    });

    diary.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/all', (req, res) => {
    Diary.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/:id', (req, res) => {
    Diary.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.delete('/:id', (req, res) => {
    Diary.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;