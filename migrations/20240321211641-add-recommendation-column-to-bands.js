'use strict';
const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequleize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bands', 'recommendation', {
      type: DataTypes.string
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
