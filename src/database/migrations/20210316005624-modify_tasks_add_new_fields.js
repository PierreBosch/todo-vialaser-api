'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        'tasks',
        'author', {
        type: Sequelize.STRING,
        allowNull: false,
      });

      await queryInterface.addColumn(
        'tasks',
        'avatar_url',
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('tasks', 'author'),
      queryInterface.removeColumn('tasks', 'avatar_url'),
    ]);
  }
};
