import config from '../config/index.js';

export default [
    {
        url: '/api/authentication/user',
        auth: true,
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
        url: '/api/lenders',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.lenders,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/lenders`]: '',
            },
        },
    },
    {
        url: '/api/borrowers',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.borrowers,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/borrowers`]: '',
            },
        },
    },
    {
        url: '/api/loans',
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5,
        },
        proxy: {
            target: config.service.loans,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/loans`]: '',
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
