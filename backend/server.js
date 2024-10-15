const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

const corsOption = {
    origin: ["http://localhost:3000"]
}

app.use(cors(corsOption));

app.get('/api', (req, res) => {
    res.json({fruits: ["apple", "orange", "banana"] });
})

const port = 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})