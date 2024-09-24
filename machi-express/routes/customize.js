import express from 'express'
const router = express.Router()

// 中介軟體，存取隱私會員資料用
import authenticate from '#middlewares/authenticate.js'

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// 資料庫使用
import sequelize from '#configs/db.js'
const { User } = sequelize.models

// 驗証加密密碼字串用
import { compareHash } from '#db-helpers/password-hash.js'

// 上傳檔案用使用multer
import path from 'path'
import multer from 'multer'
// const date = new Date()
// const formattedDate = date.toISOString().split('.')[0].replace('T', ' ')

// multer的設定值 - START
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // 存放目錄
    callback(null, 'public/customize/')
  },
  filename: function (req, file, callback) {
    // 經授權後，req.user帶有會員的id
    const date = new Date()
    const formattedDate = date
      .toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      .replace(/:/g, '')
      .replace(/\//g, '')
      .replace(/, /g, '')
    const newFilename = formattedDate
    // 新檔名由表單傳來的req.body.newFilename決定
    callback(null, newFilename + path.extname(file.originalname))
  },
})
const upload = multer({ storage: storage })
// multer的設定值 - END

// POST - 可同時上傳與更新會員檔案用，使用multer(設定值在此檔案最上面)
router.post(
  '/upload-customize',
  authenticate,
  upload.single('customize'), // 上傳來的檔案(這是單個檔案，表單欄位名稱為customize)
  function (req, res) {
    if (req.file) {
      console.log(req.file)
      return res.json({
        status: 'success',
        data: { picture: req.file.filename },
      })
    } else {
      console.log('upload failed')
      return res.json({ status: 'fail', data: null })
    }
  }
)

export default router
