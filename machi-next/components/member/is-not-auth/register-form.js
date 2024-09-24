import { useState } from 'react'
import styles from '../member.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { register } from '@/services/user'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function RegisterForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await register({ account, password, email })
      // 註冊成功，顯示 SweetAlert2 成功訊息
      Swal.fire({
        title: '註冊成功!',
        text: '您的帳號已建立成功，請登入。',
        icon: 'success',
        confirmButtonText: '確認',
        confirmButtonColor: '#ab927d',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/member/login') // 當用戶點擊確認按鈕時導向登入頁面
        }
      })
    } catch (error) {
      // 註冊失敗，顯示 SweetAlert2 錯誤訊息
      Swal.fire({
        title: '註冊失敗!',
        text: '無法創建帳號：' + error.message,
        icon: 'error',
        confirmButtonText: '關閉',
        confirmButtonColor: '#ab927d',
      })
    }
  }

  return (
    <main className={`form-member w-100 m-auto text-center`}>
      <div className="card my-3 border-0 shadow mb-5">
        <div className="card-body ">
          <h5 className="text-center fw-bold mx-5 mt-3 mb-4 text-brown border-bottom">
            會員註冊
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="使用者名稱"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>

              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入密碼。
          </div> */}
            </div>

            <div className="row mb-4">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 ${styles['form-control']} `}
                  placeholder="電子郵件地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入有效的電子郵件地址。
          </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入密碼。
          </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="確認密碼"
                  value={confirmPassword} // 使用新的狀態變數 confirmPassword
                  onChange={(e) => setConfirmPassword(e.target.value)} // 使用新的設置函數 setConfirmPassword
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
                  請輸入確認密碼。
                  </div> */}
            </div>

            <button type="submit" className=" text-white btn btn-brown w-100">
              註冊
            </button>

            <div className="row mt-4 ">
              <p className={`text-primary-dark ${styles['notice']}`}>
                已經是會員了？
                <Link className="text-primary-dark" href="/member/login">
                  登入
                </Link>
                。
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
