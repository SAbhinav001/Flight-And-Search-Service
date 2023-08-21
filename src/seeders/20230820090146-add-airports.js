'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: "Chhatrapati Shivaji",
      cityId : 4,
      createdAt : new Date(),
      updatedAt :new Date()
    },
    {
      name: "Shirdi International Airport",
      cityId : 4,
      createdAt : new Date(),
      updatedAt :new Date()
    },
    {
      name: "DB patil international",
      cityId : 4,
      createdAt : new Date(),
      updatedAt :new Date()
    },
    {
      name: "Mumbai Airport",
      cityId : 4,
      createdAt : new Date(),
      updatedAt :new Date()
    },
    {
      name: "Juhu Airport",
      cityId : 4,
      createdAt : new Date(),
      updatedAt :new Date()
    },
    {
      name: "IGI International Airport",
      cityId : 2,
      createdAt : new Date(),
      updatedAt :new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
