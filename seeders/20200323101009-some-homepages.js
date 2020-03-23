'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "testuser",
          description: "test@test.com",
          backgroundColor: 'ffff',
          color: dddd,
          userId: xxxx,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "testuser",
          description: "test@test.com",
          backgroundColor: 'ffff',
          color: dddd,
          userId: xxxx,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "testuser",
          description: "test@test.com",
          backgroundColor: 'ffff',
          color: dddd,
          userId: xxxx,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};

