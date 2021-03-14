const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            topic: DataTypes.STRING,
            description: DataTypes.STRING,
            done: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }

}

module.exports = Task;