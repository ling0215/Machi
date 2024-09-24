import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CartItem',
    {
      cart_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // 新增這一行
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      product_name: {
        type: DataTypes.STRING(50),
      },
      product_subtitle: {
        type: DataTypes.STRING(50),
      },
      product_price: {
        type: DataTypes.INTEGER,
      },
      product_count: {
        type: DataTypes.INTEGER,
      },
      course_address: {
        type: DataTypes.STRING(50),
      },
      course_id_fk: {
        type: DataTypes.INTEGER,
      },
      course_name: {
        type: DataTypes.STRING(50),
      },
      course_price: {
        type: DataTypes.INTEGER,
      },
      course_count: {
        type: DataTypes.INTEGER,
      },
      course_date: {
        type: DataTypes.STRING(50),
      },
      custom_size: {
        type: DataTypes.STRING,
      },
      custom_layer: {
        type: DataTypes.STRING,
      },
      custom_flavor: {
        type: DataTypes.STRING,
      },
      custom_decor: {
        type: DataTypes.STRING(50),
      },
      custom_price: {
        type: DataTypes.INTEGER,
      },
      custom_count: {
        type: DataTypes.INTEGER,
      },
      custom_img: {
        type: DataTypes.STRING(50),
      },
    },
    {
      tableName: 'cart_item',
      timestamps: false,
      paranoid: false,
      underscored: true,
    }
  )
}
