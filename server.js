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
  var itemSchema = mongoose.Schema({
      name: String,
      completed: {type: Boolean, default: false},
      _itemId: {type: mongoose.Schema.Types.ObjectId, auto: true}
  });

  var Item = mongoose.model('Item', itemSchema);
});

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
