import session from 'express-session';
import Keycloak from 'keycloak-connect';
import config from './config/index.js';
import authenticateToken from './middleware/authentication.js';

const setupAuth = (app, routes) => {
    var memoryStore = new session.MemoryStore();
    // var keycloak = new Keycloak({ store: memoryStore });

    // app.use(
    //     session({
    //         secret: config.SESSION_SECRET,
    //         resave: false,
    //         saveUninitialized: true,
    //         store: memoryStore,
    //     }),
    // );

    // app.use(keycloak.middleware());

    routes.forEach((r) => {
        if (r.auth) {
            r.proxy.onProxyReq = (proxyReq, req, res) => {
                console.log('req,ad', req.user);
                proxyReq.setHeader('user', JSON.stringify(req.user));
            };
            app.use(r.url, authenticateToken, function (req, res, next) {
                next();
            });
        }
    });
};

// const setupAuth = (app, routes) => {
//     routes.forEach((r) => {
//         if (r.auth) {
//             // r.onProxyReq = (proxyReq, req, res) => {
//             //     // add custom header to request
//             //     const userData = { userId: '123g', roles: 'lender' };
//             //     proxyReq.setHeader('user', JSON.stringify(userData));
//             //     // or log the req
//             // };
//             r.proxyReqOptDecorator = (proxyReqOpts, srcReq) => {
//                 const userData = {
//                     userId: '1234f',
//                     roles: 'lender',
//                 };
//                 proxyReqOpts.headers['user'] = JSON.stringify(userData);
//                 // you can change the method
//                 return proxyReqOpts;
//             };

//             console.log('R', r);
//             app.use(r.url, authenticateToken, function (req, res, next) {
//                 next();
//             });
//         }
//     });
// };

export default setupAuth;
