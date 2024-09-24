import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'OrderItem',
    {
      order_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      order_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order', // 这是被引用的表的名字
          key: 'order_id', // 这是被引用表的主键
        },
      },
      order_product_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order_product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_product_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order_product_detail: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order_product_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_product_price: {
        // 新增的欄位
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'order_item',
      timestamps: false,
      paranoid: false,
      underscored: true,
    }
  )
}
