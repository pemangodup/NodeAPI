const express = require('express');
const dotenv = require('dotenv');

//logger files
const logger = require('./middleware/logger');

//load env vars
dotenv.config({ path: './config/config.env' });

// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();

app.use(logger);

// Mount routers
app.use('/app/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
