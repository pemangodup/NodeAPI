// importing express
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');
// Routes files
const bootcamps = require('./routes/bootcamps');

// Third party middleware for logger purpose
const morgan = require('morgan');

//logger files
const logger = require('./middleware/logger');

//load env vars
dotenv.config({ path: './config/config.env' });

// connect to db
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

// middlewares.....
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan(`dev`));
}
app.use(logger);
// Mount routers
app.use('/app/v1/bootcamps', bootcamps);

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandeled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
