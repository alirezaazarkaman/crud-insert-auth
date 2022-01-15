const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const User = require('../database/user-model');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const flash = require('flash');
const morgan = require('morgan');
const bodyparser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');


module.exports = {
    express,
    app,
    MongoClient,
    url,
    User,
    mongoose,
    port,
    flash,
    morgan,
    bodyparser,
    session,
    cookieParser
}