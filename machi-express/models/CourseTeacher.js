import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CourseTeacher',
    {
      teacher_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      teacher_img: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      teacher_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      teacher_phone: {
        type: DataTypes.CHAR(50),
        allowNull: false,
      },
      teacher_email: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      teacher_expertise: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
      teacher_intro: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
      teacher_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      tableName: 'course_teacher', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
