const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './config/config.env' });

// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Mount routers
app.use('/app/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
