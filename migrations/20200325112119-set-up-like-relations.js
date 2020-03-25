'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("likes", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("likes", "storyId", {
      type: Sequelize.INTEGER,
      references: {
        model: "stories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("likes", "userId");
    await queryInterface.removeColumn("likes", "storyId");
  },
};