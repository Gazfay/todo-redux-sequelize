const dataHelper = require('./../utils/dataHelper');
const todosService = require('./../services').todosService;

let todosController = {
  createTodo: (req, res, err) => {
    console.log(req.body);
    todosService.createTodo(req.body)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  getAllTodos: (req, res, err) => {
    todosService.getAllTodos()
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  deleteTodo: (req, res, err) => {
    todosService.deleteTodo(req.params.id)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  updateTodo: (req, res, err) => {
    console.log(req.params.id);
    todosService.updateTodo(req.params.id, req.body)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  }
}

module.exports = todosController;


