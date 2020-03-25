'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "likes",
      [
        {
          userId: 1,
          storyId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          storyId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          storyId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          storyId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("likes", null, {});
  }
};