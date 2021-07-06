const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamp', (req, res) => {
  //res.send({ name: 'Pema Ngodup' });
  // res.sendStatus(400).json({
  //   success: false,
  // });
  // res.status(400).json({
  //   success: false,
  // });

  res.status(200).json({ success: true, ms: 'Show all bootcamps' });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
