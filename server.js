const express = require('express');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.load();
}

const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB_PATH);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  const todoSchema = mongoose.Schema({
      name: String,
      completed: {type: Boolean, default: false}
  });

  const TODO = mongoose.model('TODO', todoSchema);

  // let testTODO = new TODO({ name: 'Much TODO, such test' });

  // testTODO.save(function (err, testTODO) {
  //   if (err) return console.error(err);
  //   console.log(`Wow new TODO`);
  // });

  // TODO.find(function (err, todos) {
  //   if (err) return console.error(err);
  //   console.log(todos);
  // });
});

app.set('port', (process.env.PORT || 3001));

app.get("/api/todos", (req, res) => {
  TODO.find(function (err, todos) {
    if (err) return res.status(500).json(err);
    res.json(todos);
  });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
