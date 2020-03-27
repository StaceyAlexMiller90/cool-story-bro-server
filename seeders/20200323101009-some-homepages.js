'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Lorem Ipsum",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          backgroundColor: '#FFFFFF',
          color: '#1f1235',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lorem Ipsum",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          backgroundColor: '#004643',
          color: '#fffffe',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lorem Ipsum",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          backgroundColor: '#90b4ce',
          color: '#094067',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Lorem Ipsum",
          description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          backgroundColor: '#faeee7',
          color: '#33272a',
          userId: 4,
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

