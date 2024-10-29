const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


// router.get('/all', (req, res) => {
//     User.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

router.post('/add', async (req, res) => {
    try{
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
})

module.exports = router;