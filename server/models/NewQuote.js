import mongoose from 'mongoose';
const schema = mongoose.Schema;

const newQuoteSchema = schema({

    quote: [{
        firstName: String,
        lastName: String,
        address1: String,
        address2: String,
        address3: String,
        town: String,
        postcode: String,
        quoteRef: String,
        startDate: String,
        monthlyPrice: Number,
        annualPrice: Number
        }]

});

module.exports = mongoose.model('NewQuote', newQuoteSchema);