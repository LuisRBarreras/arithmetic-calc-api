'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    static associate (models) {
      Records.belongsTo(models.Operations, {
        foreignKey: 'operation_id'
      })
    }
  }
  Records.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Operations',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    operation_response: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Records'
  })

  return Records
}
