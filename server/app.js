import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import colors from 'colors';
import cors from 'cors';

import Index from './router/index';
import Posts from './router/posts';
import Page from './router/page';
import Category from './router/category';
import Author from './router/author';

let app = express ();
const SUCCESS = '[SUCCESS]'.green;

app.use(cors());
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Origin', "http://localhost:8888");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Cookie, Set-Cookie');
//     next();
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

let db_url = 'mongodb://127.0.0.1:27017/material';
mongoose.connect(db_url);
console.log(SUCCESS + " mongoDB ready ...");


console.log(SUCCESS + " applying router middleware ...");
app.use('/', Index);
app.use('/posts', Posts);
app.use('/pages', Page);
app.use('/category', Category);
app.use('/author', Author);
console.log(SUCCESS + " server started success! API serving ... ");

module.exports = app;


// app.use((req, res, next) => {
// 	let err = new Error ("Not Found");
// 	err.status = 404;
// 	next(err);
// });
