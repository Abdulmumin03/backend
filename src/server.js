const app = require('./app');
const config = require('./config');
const PORT =  process.env.PORT || config.port;

const server = app.listen(PORT, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Express Server listening on port: ${PORT}`);
});