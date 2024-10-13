const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.send('Message sent. Thank you.');
})

module.exports = router;