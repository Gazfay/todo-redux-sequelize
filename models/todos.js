'use strict';
module.exports = function(sequelize, DataTypes) {
  const Todos = sequelize.define('Todos', {
    text: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Todos;
};