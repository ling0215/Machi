import { generateHash } from './password-hash.js'

async function createUserWithHashedPassword(email, plainPassword) {
  // 生成哈希過的密碼
  const hashedPassword = await generateHash(plainPassword)

  // 回傳一個包含電子郵件地址和哈希過的密碼的物件
  return {
    email: email,
    password: hashedPassword,
  }
}

// 使用這個函數來創建一個新的使用者
createUserWithHashedPassword('LL@gmail.com', '12345').then((user) =>
  console.log(user)
)
