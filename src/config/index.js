const dotenv = require('dotenv');

const envFound = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

console.log(process.env.NODE_ENV);

module.exports = require('./dev');
