const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init({
      topic: DataTypes.STRING,
      author: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
      description: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }
}

module.exports = Task;