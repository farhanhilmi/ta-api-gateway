import { createProxyMiddleware } from 'http-proxy-middleware';
import proxy from 'express-http-proxy';

const setupProxies = (app, routes) => {
    const exist = false;

    routes.forEach((r) => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    });
};

// const setupProxies = (app, routes) => {
//     routes.forEach((r) => {
//         app.use(
//             r.url,
//             proxy(r.target, {
//                 proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
//                     const userData = {
//                         userId: '1234f',
//                         roles: 'lender',
//                     };
//                     proxyReqOpts.headers['user'] = JSON.stringify(userData);
//                     // you can change the method
//                     return proxyReqOpts;
//                 },
//             }),
//         );
//     });
// };

export default setupProxies;
