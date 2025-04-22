const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/add', async (req, res) => {
    try{
        const check = await User.findOne({name: req.body.name});
        if (check !== null) {
            console.log('return');
            res.send('user existed');
            return;
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            name: req.body.name,
            password: hashedPassword,
        });
    
        user.save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
            })
    } catch {
        res.status(500).send();
    }
})

router.post('/login', async(req, res) => {
    const user = await User.findOne({name: req.body.name});
    if (user == null) {
        return res.status(400).send('Connot find user');
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success');
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
})

router.get('/all', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;