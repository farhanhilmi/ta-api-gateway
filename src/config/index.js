import dotenv from 'dotenv';

dotenv.config();

const {
    APP_NAME,
    PORT,
    AUTH_SERVICE_PORT,
    LENDER_SERVICE_PORT,
    BORROWER_SERVICE_PORT,
    FUNDING_SERVICE_PORT,
    ACCESS_TOKEN_PRIVATE_KEY,
    SESSION_SECRET,
} = process.env;

const config = {
    app: {
        port: PORT,
        name: APP_NAME,
    },
    service: {
        auth: AUTH_SERVICE_PORT,
        lender: LENDER_SERVICE_PORT,
        borrower: BORROWER_SERVICE_PORT,
        funding: FUNDING_SERVICE_PORT,
    },
    ACCESS_TOKEN_PRIVATE_KEY,
    SESSION_SECRET,
};

export default config;
