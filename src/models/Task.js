const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init({
      topic: DataTypes.STRING,
      description: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }
}

module.exports = Task;