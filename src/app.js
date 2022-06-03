const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const {
    tokenModule,
} = require('./components');

const config = require('./config');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(
    express.urlencoded({
        limit: '2mb',
        extended: true,
    }),
);
app.use(cookieParser());
app.use(helmet());
app.use(
    session({
        secret: config.expressSessionSescretKey,
        resave: false,
        saveUninitialized: false,
    }),
);

app.set('trust proxy', 1);

app.use(`${config.api.prefix.v1}/tokens`, tokenModule.routes);

module.exports = app;
