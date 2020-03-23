'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "story 1",
          content: "a story about nothing",
          imageUrl: 'https://lh3.googleusercontent.com/afS719gxko5j3EkeHIPpDbSP4HjwTG7-pHn3URfzQ7wPXquVX6uV6VeEnFCmkQwk4w',
          homepageId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "story 2",
          content: "still nothing",
          imageUrl: 'https://image.winudf.com/v2/image/bmljb2xhaS5ub3RoaW5nX3NjcmVlbl8wXzE1MTY4MjkxOTlfMDA2/screen-0.jpg?fakeurl=1&type=.jpg',
          homepageId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "story 3",
          content: "nothing you say?",
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Nothing_silhouette.jpg',
          homepageId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "story 4",
          content: "it's nothing personal",
          imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--QHUeYZ_G--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1553023888/production/designs/4449105_0.jpg',
          homepageId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  }
};
