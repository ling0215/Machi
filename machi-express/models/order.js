import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Order',
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_payment: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      order_username: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      order_address: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
      order_phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_status: {
        type: DataTypes.STRING(50),
        defaultValue: '已付款',
      },
      order_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'order',
      timestamps: false,
      paranoid: false,
      underscored: true,
    }
  )
}
