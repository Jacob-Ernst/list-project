const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const routes = require('./routes');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.load();
}

mongoose.connect(process.env.DB_PATH);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.set('port', (process.env.PORT || 3001));

app.get("/api/todos", routes.index);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
