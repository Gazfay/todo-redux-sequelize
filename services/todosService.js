const Todos = require('./../models').Todos;

const todosService = {
  createTodo:(data) => {
    return Todos.create(data)
    .then(todo => {
      return todo;
    });
  },

  getAllTodos:() => {
  return Todos
    .findAll()
    .then(todos => {
      return todos;
    });
  },

  updateTodo: (id, todo) => {
    return Todos
      .update(todo, {
        where: {id},
        returning: true,
      })
      .then(() => {
        return Todos
          .findById(id)
          .then((todo)=> {
            return todo;
          });
      });
  },

  deleteTodo: (id) => {
    return Todos
      .destroy({
        where: {id}
      })
      .then((todo)=> {
        console.log(todo);
        return todo;
      });
  }


}

module.exports = todosService;