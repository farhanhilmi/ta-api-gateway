import dotenv from 'dotenv';

const NODE_ENV = process.env.NODE_ENV;
const env = `${NODE_ENV}.env`;

console.log('current env:', env);

const basedir = path.resolve(process.cwd());
dotenv.config({
    path: join(basedir, `${NODE_ENV}.env`),
});

const {
    APP_NAME,
    PORT,
    AUTH_SERVICE_PORT,
    LENDERS_SERVICE_PORT,
    BORROWERS_SERVICE_PORT,
    LOANS_SERVICE_PORT,
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
        lenders: LENDERS_SERVICE_PORT,
        borrowers: BORROWERS_SERVICE_PORT,
        loans: LOANS_SERVICE_PORT,
    },
    ACCESS_TOKEN_PRIVATE_KEY,
    SESSION_SECRET,
};

export default config;
