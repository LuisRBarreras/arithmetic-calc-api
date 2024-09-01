'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Operations', [
      { type: 'addition', cost: 1, createdAt: new Date(), updatedAt: new Date() },
      { type: 'subtraction', cost: 2, createdAt: new Date(), updatedAt: new Date() },
      { type: 'multiplication', cost: 3, createdAt: new Date(), updatedAt: new Date() },
      { type: 'division', cost: 4, createdAt: new Date(), updatedAt: new Date() },
      { type: 'square_root', cost: 5, createdAt: new Date(), updatedAt: new Date() },
      { type: 'random_string', cost: 6, createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Operations', null, {})
  }
}
