"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
<<<<<<< HEAD
      login: {
        type: Sequelize.STRING,
      },
=======
>>>>>>> 0da209aa3fa31ed16b59d5dc224ad9bf9e0d36fd
      photo: {
        type: Sequelize.STRING,
      },
      login: {
        type: Sequelize.STRING,
      },
      info: {
        type: Sequelize.STRING,
      },
      interests: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Profiles");
  },
};
