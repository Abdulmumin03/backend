module.exports = {
    appName: process.env.APP_NAME,
    port: 4000,
    dbURI: process.env.MONGODB_URI_DEV,
    jwtSecret: '8uvwrehfr34f83834nfv301==2332=RR$T%hfwh34384r132Y%Y349u340tu434',
    tokenType: 'Bearer',
    medApiBaseUrl: process.env.MED_API_URL,
    clientBaseUrl: process.env.CLIENT_BASE_URL,
    expressSessionSescretKey: process.env.EXPRESS_SESSION_SECRET_KEY,
    jwt_cookie_expire: process.env.JWT_COOKIE_EXPIRE,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: {
            v1: process.env.API_PREFIX_V1,
        },
    },
};
