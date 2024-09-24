import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Course',
    {
      course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      course_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      course_description: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
      course_description_full: {
        type: DataTypes.STRING(600),
        allowNull: true,
      },
      course_category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      teacher_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      course_location: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      course_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      course_enroll_start: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      course_enroll_end: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      course_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      course_end_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      course_status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },course_teacher: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },course_teacher_description: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
    },
    {
      tableName: 'course', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
