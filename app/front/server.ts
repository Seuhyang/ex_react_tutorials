import express from 'express';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import BigNumber from 'bignumber.js';
import rateLimit from 'express-rate-limit';
import config from '@test/config';

const app = express();

app.use(
    helmet({
        contentSecurityPolicy: false,
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.locals.BigNumber = BigNumber;

app.use(async (req, res, next) => {
    res.locals.url = req.path;
    next();
});

const limiter = rateLimit({
    windowMs: 1 * 1 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
});
