'use strict';

const meet_greet = require('../models/meet_greet');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bands', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        hasMany: set_time.band_id,
        hasMany: meet_greet.band_id
      },
      name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.TEXT
      },
      available_start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bands');
  }
};