'use strict';

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
    await queryInterface.bulkInsert('users', [
    {
        id: 0,
        nombre: 'John Doe',
        createdAt: '2024-06-22',
        updatedAt: '2024-06-22'
    },{
      id: 1,
      nombre: 'Fabrizio Clomer',
      createdAt: '2024-06-23',
      updatedAt: '2024-06-23'
    },{
      id: 2,
      nombre: 'Ryan Gosling',
      createdAt: '2024-06-22',
      updatedAt: '2024-06-22'
    }
  ], {});
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
