import { DataTypes } from 'sequelize'
import { generateHash } from '#db-helpers/password-hash.js'

export default async function (sequelize) {
  return sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_nickname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_account: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_gender: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '不願透漏',
      },
      user_birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      user_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_status: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
      },
      google_uid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      line_uid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      line_access_token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      user_createtime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      user_updatetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.user_password) {
            user.user_password = await generateHash(user.user_password)
          }
        },
        beforeUpdate: async (user) => {
          if (user.user_password) {
            user.user_password = await generateHash(user.user_password)
          }
        },
      },
      tableName: 'user',
      timestamps: false, // 資料表結構已經包含 `user_createtime` 和 `user_updatetime`
      paranoid: false,
      underscored: true,
    }
  )
}
