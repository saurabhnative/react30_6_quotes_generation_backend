const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quotesJSONArray = require('./quotesSource.json');
const port = 3000;
require('dotenv').config()
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true }, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log("connected");
    }
});

const quotesRoute = require('./routes/quotes');
app.use(bodyParser.json());
app.use('/quotes', quotesRoute);
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})