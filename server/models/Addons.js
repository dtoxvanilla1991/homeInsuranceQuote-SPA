import mongoose from 'mongoose';
const { Schema } = mongoose;

const addonSchema = Schema({
    
    addons: [{

        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        monthlyPrice: {
            type: Number,
            required: true,
        },
        AnnualPrice: {
            type: Number,
            required: true,
        },

    }],

});

module.exports = mongoose.model('Addon', addonSchema);