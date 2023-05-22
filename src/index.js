import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import express from 'express';
import proxy from 'express-http-proxy';
import morgan from 'morgan';
import session from 'express-session';

import config from './config/index.js';
import authenticateToken from './middleware/authentication.js';

import ROUTES from './routes/index.js';
import setupProxies from './proxy.js';
import setupAuth from './auth.js';
import errorHandler from './errorHandler.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({ origin: '*' }));

app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms'),
);

morgan.token('param', function (req, res, param) {
    return req.params[param];
});

errorHandler(app, ROUTES);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);
// setupProxies(app, dataProxy);
// proxy(dataProxy);
// console.log('ROUTES', app._router.stack);
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views/template.html'));
});

// const secret = config.SESSION_SECRET;
// const store = new session.MemoryStore();
// const protect = (req, res, next) => {
//     const { authenticated } = req.session;

//     if (!authenticated) {
//         res.sendStatus(401);
//     } else {
//         next();
//     }
// };

// app.use(
//     session({
//         secret,
//         resave: false,
//         saveUninitialized: true,
//         store,
//     }),
// );

// try {
//     // app.use('/api/users/', proxy(config.service.users));
//     app.use(
//         '/api/users/',
//         authenticateToken,
//         proxy(config.service.users, {
//             proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
//                 // you can update headers
//                 const userData = {
//                     userId: '1234f',
//                     roles: 'lender',
//                 };
//                 proxyReqOpts.headers['user'] = JSON.stringify(userData);
//                 // you can change the method
//                 return proxyReqOpts;
//             },
//         }),
//     );
// } catch (error) {
//     console.log(error);
// }

// WEBHOOKS ENDPOINTS Payment Virtual Account
// Xendit callback verification token bAzXKdMmdeoPImM88C9ZdbXitAp0R7GNEIK9uTkWKXXLGVb1
app.post('/hook', (req, res, next) => {
    console.log('BODY:', req.body);
    // res.status(200).end();
    res.status(200).json({
        data: req.body,
    });
});

// API ENDPOINT NOT FOUND
app.use((req, res, next) => {
    const error = new Error("API endpoint doesn't exist JAJAJA");
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
