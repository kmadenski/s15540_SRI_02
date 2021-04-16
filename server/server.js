const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const student = require('./routes/student');

app.use(bodyParser.json());

app.use('/api/student', student);

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on ${port}`));
