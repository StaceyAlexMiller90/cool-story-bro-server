"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Reynaldo Robicheaux",
          email: "Reynaldo@Reynaldo.com",
          password: bcrypt.hashSync("reynaldo1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sabrina Strange",
          email: "Sabrina@Sabrina.com",
          password: bcrypt.hashSync("sabrina1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Darrin Dortch",
          email: "Darrin@Dortch.com",
          password: bcrypt.hashSync("darrin1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nora Nastasi",
          email: "Nora@Nastasi.com",
          password: bcrypt.hashSync("nora1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
