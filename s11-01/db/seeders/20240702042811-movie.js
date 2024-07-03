'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
     await queryInterface.bulkInsert('movies', [
    {
      id: 1,
      title: 'Jour se lève, Le (Daybreak)',
      genres: 'Crime|Drama|Romance|Thriller',
      createdAt: '2024-07-01',
      updatedAt: '2024-07-01'
    },{
      id: 2,
      title: 'Crawlspace',
      genres: 'Horror|Thriller',
      createdAt: '2024-07-01',
      updatedAt: '2024-07-01'
    },{
      id: 3,
      title: 'The Cyclone',
      genres: 'Comedy|Romance',
      createdAt: '2024-07-01',
      updatedAt: '2024-07-01'
    },{
      id: 4,
      title: 'Prophets Prey',
      genres: 'Crime|Documentary',
      createdAt: '2024-07-01',
      updatedAt: '2024-07-01'
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
