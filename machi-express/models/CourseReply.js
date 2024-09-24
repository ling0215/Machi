import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CourseReply',
    {
      course_reply_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      course_comment_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      course_reply_text: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      course_reply_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      course_reply_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'course_reply', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
