import Addon from '../models/Addons';
import NewQuote from '../models/NewQuote';
import path from 'path';

exports.newQuote = (req, res, next) => {

    //
    NewQuote.find({}).then((info) => {

        if(info.length === 0){
            const error = new Error('Coundnt retreive data');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(info);
    }).catch( err => {

        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });

};