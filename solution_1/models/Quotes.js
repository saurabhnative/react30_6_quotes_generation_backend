const mongoose = require('mongoose');

const QuotesSchema = mongoose.Schema({
    'quotes': {
        type: Array,
        required: true
      },
})

module.exports = mongoose.model('Quotes', QuotesSchema, "Quotes")