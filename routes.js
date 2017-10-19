const Todo = require('./models/Todo');

module.exports = {
  index: (req, res) => {
    Todo.find((err, todos) => {
      if (err) return res.status(500).json(err);
      res.json(todos);
    });
  },

  create: (req, res) => {
    let newTodo = new Todo({
      name: req.body.name
    });

    newTodo.save((err, newTodo) => {
      if (err) return res.status(500).json(err);
      res.json(newTodo);
    });
  },

  destroy: (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
      if (err) return res.status(500).json(err);
      res.status(204);
      res.json(todo);
    });
  }
}
