import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import db from 'dbConf';
import basicRoutes from "./routes/common";

const app = express();
const env = process.env.NODE_ENV || "developement";
const port = process.env.PORT || 3000;
const dbUrl = `mongodb+srv://${db.db.env.MONGO_USER}:${db.db.env.MONGO_PASS}@coellocluster.sskgn.mongodb.net/${db.db.env.MONGODB_NAME}`;

//middlewares:
app.use( bodyParser.urlencoded({extended:false}));
//req data in json format
app.use(bodyParser.json());
//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
    'Content-Type, Authorization');
    next();
    });

//setting up router modules
app.use('/api', basicRoutes);

//e error handling:
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const msg = error.message;
    const data = error.data;
    res.status(statusCode).json({msg, data});
});



//run app:
app.listen(port, () => console.log(`RESTful API listening on port: ${port}`))