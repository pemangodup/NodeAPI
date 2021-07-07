const express = require('express');
const dotenv = require('dotenv');

// Third party middleware for logger purpose
const morgan = require('morgan');

//logger files
const logger = require('./middleware/logger');

//load env vars
dotenv.config({ path: './config/config.env' });

// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan(`dev`));
}
app.use(logger);

// Mount routers
app.use('/app/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
