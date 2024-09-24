import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'CourseFavorite',
    {
      course_favorite_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      course_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'course_favorite', //直接提供資料表名稱
      timestamps: false, // 關閉時間戳，因為你的資料表結構中沒有相應的欄位
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  )
}
