import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Product',
    {
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      product_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      product_description: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      product_description_full: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      product_category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      category_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_sub_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_subtitle_small: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      product_subtitle_middle: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_subtitle_large: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_price_small: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_price_middle: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      product_price_large: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      product_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 300,
      },
      product_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      product_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'product', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
