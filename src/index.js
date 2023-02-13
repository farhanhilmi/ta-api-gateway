import express from 'express';
import proxy from 'express-http-proxy';
import morgan from 'morgan';

import config from './config.js';

const app = express();

app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms'),
);
app.use(express.json());

try {
    app.use('/api/users/', proxy(config.service.users));
} catch (error) {
    console.log(error);
}

// API ENDPOINT NOT FOUND
app.use((req, res, next) => {
    const error = new Error("API endpoint doesn't exist");
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, _) => {
    res.status(error.status || 500).json({
        success: false,
        data: [],
        message: error.message || 'Internal Server Error',
    });
});

app.listen(config.app.port, () => {
    console.log(`${config.app.name} is listening to port ${config.app.port}`);
});
