import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'ArticleComment',
    {
      article_comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      article_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      article_comment_content: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
      article_comment_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      article_comment_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'article_comment', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
