'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operation_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Operations' },
          key: 'id'
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Users' },
          key: 'id'
        }
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_balance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      operation_response: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Records')
  }
}
