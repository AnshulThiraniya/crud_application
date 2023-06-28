import express from 'express'
import connection from './database/db.js';

import Routes from './routes/route.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';

import cors from 'cors'
const App=express();

dotenv.config();

App.use(cors());

App.use(bodyParser.json({extended:true}));
App.use(bodyParser.urlencoded({extended:true}));
const PORT=8000;

App.use('/',Routes);

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


connection(username , password);
App.listen(PORT , ()=>console.log (`App is running succesfully on port ${PORT}`));