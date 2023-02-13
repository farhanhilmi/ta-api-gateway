import dotenv from 'dotenv';

dotenv.config();

const { APP_NAME, PORT, USER_SERVICE_PORT } = process.env;

const config = {
    app: {
        port: PORT,
        name: APP_NAME,
    },
    service: {
        users: USER_SERVICE_PORT,
    },
};

export default config;
