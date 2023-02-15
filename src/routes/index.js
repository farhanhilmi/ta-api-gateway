import config from '../config/index.js';

export default [
    {
        url: '/api/authentication',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.auth,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/authentication`]: '',
            },
        },
    },
    {
        url: '/api/lender',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.lender,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/lender`]: '',
            },
        },
    },
    {
        url: '/api/borrower',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.borrower,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/borrower`]: '',
            },
        },
    },
    {
        url: '/api/funding',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.funding,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/funding`]: '',
            },
        },
    },

    // TES ROUTE ENDPOINT
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: 'https://www.google.com',
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        },
    },
];
