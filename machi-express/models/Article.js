import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Article',
    {
      article_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // 新增這一行
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      article_title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      article_content: {
        type: DataTypes.STRING(6000),
        allowNull: false,
      },
      article_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      article_edittime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      article_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      article_category: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'article', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
  
}
