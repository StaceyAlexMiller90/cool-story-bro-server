'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "testhomepage1",
          description: "a random description of stuff",
          backgroundColor: '#121629',
          color: '#fffffe',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "testhomepage2",
          description: "a couple of things that i want to broadcast to the world",
          backgroundColor: '#eff0f3',
          color: '#ff8e3c',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};

