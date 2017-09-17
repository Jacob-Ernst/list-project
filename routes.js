const Todo = require('./models/Todo');

module.exports = {
  index: (req, res) => {
    Todo.find((err, todos) => {
      if (err) return res.status(500).json(err);
      res.json(todos);
    });
  }
}
