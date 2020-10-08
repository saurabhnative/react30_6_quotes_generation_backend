const express = require('express');
const router = express.Router();
const Quotes = require('../models/Quotes');

router.post('/add', async (req, res) => {
    const quotesObject = new Quotes({
        'quotes': req.body.quotes
    });
    try {
        quotesObject.save((err, response) => {
            if (err) {
                console.log("error", error);
            } else {
                console.log("saved", response);
            }
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
    res.status(200).json({
        "response": "success"
    });
});

router.get('/list', async (req, res) => {
    const quotesObject = await Quotes.find({});
    res.json({'result':quotesObject[0].quotes});
});

router.get('/random', async (req, res) => {
    const randomNumber = Math.floor(Math.random() * 21);
    const quotesObject = await Quotes.find({});
    const quoteItem = quotesObject[0].quotes[randomNumber];
    res.send(quoteItem);
});

module.exports = router;