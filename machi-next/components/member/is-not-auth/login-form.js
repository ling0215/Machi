import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Swal from 'sweetalert2'
import styles from '../member.module.scss'
import LineLogo from '@/components/icons/line-logo'
import GoogleLogo from '@/components/icons/google-logo'
import FacebookLogo from '@/components/icons/facebook-logo'
import { useAuth, initUserData } from '@/hooks/use-auth'
import useFirebase from '@/hooks/use-firebase'
import {
  login,
  checkAuth,
  getFavs,
  googleLogin,
  logout,
  parseJwt,
  getUserById,
} from '@/services/user'

export default function LoginForm() {
  //GOOGLE登入
  const { logoutFirebase, loginGoogleRedirect, initApp } = useFirebase()
  const { auth, setAuth } = useAuth()

  useEffect(() => {
    initApp(callbackGoogleLoginRedirect)
  }, [])

  const callbackGoogleLoginRedirect = async (providerData) => {
    console.log(providerData)

    // 如果目前react(next)已經登入中，不需要再作登入動作
    if (auth.isAuth) return

    // 向伺服器進行登入動作
    const res = await googleLogin(providerData)

    console.log(res.data)

    if (res.data.status === 'success') {
      // 從JWT存取令牌中解析出會員資料
      // 注意JWT存取令牌中只有id, username, google_uid, line_uid在登入時可以得到
      const jwtUser = parseJwt(res.data.data.accessToken)
      // console.log(jwtUser)

      const res1 = await getUserById(jwtUser.user_id)
      //console.log(res1.data)

      if (res1.data.status === 'success') {
        // 只需要initUserData中的定義屬性值，詳見use-auth勾子
        const dbUser = res1.data.data.user
        const userData = { ...initUserData }

        for (const key in userData) {
          if (Object.hasOwn(dbUser, key)) {
            userData[key] = dbUser[key] || ''
          }
        }

        // 設定到全域狀態中
        setAuth({
          isAuth: true,
          userData,
        })

        console.log('已登入', userData)
        router.push('/')
      } else {
        console.log('登入後無資料')
        // 這裡可以讓會員登出，因為這也算登入失敗，有可能會造成資料不統一
      }
    } else {
      console.log('登入失敗')
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const initUserData = {
    user_id: 0,
    user_name: '',
    user_nickname: '',
    user_account: '',
    user_email: '',
    user_gender: '',
    user_birthday: '',
    user_phone: '',
    user_address: '',
    google_uid: '',
    line_uid: '',
  }

  const handleCheckAuth = async () => {
    const res = await checkAuth()

    // 伺服器api成功的回應為 { status:'success', data:{ user } }
    if (res.data.status === 'success') {
      // 只需要initUserData的定義屬性值
      const dbUser = res.data.data.user
      const userData = { ...initUserData }

      if (dbUser) {
        for (const key in userData) {
          if (Object.hasOwn(dbUser, key)) {
            userData[key] = dbUser[key] || ''
          }
        }
      }
      // 設到全域狀態中
      setAuth({ isAuth: true, userData })
      console.log(userData)

      // 登入成功，顯示成功訊息
      Swal.fire({
        icon: 'success',
        title: '登入成功',
        confirmButtonColor: '#ab927d',
      })

      router.push('/')
    } else {
      console.warn(res.data)
      Swal.fire({
        icon: 'error',
        title: '登入失敗',
        text: '請檢查你的帳號或密碼是否正確。',
        confirmButtonColor: '#ab927d',
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await login({ email, password })

      // 登入成功，處理 response
      console.log(response)
      handleCheckAuth()
    } catch (error) {
      // 登入失敗，處理 error
      console.error(error)
    }
  }

  return (
    <main className={`form-member w-100 m-auto text-center`}>
      <div className="card my-3 border-0 shadow">
        <div className="card-body">
          <h5 className="text-center fw-bold mx-5 mt-3 mb-4 text-brown border-bottom">
            會員登入
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
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
              <div className="col-sm-6 text-start">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label
                    className={`form-check-label  ${styles['notice']}`}
                    htmlFor="gridCheck1"
                  >
                    保持登入狀態
                  </label>
                </div>
              </div>

              <div className="col-sm-4 offset-sm-2 test-end">
                <Link
                  href="/member/forget-password"
                  className={`text-primary-dark ${styles['notice']}`}
                >
                  忘記密碼？
                </Link>
              </div>
            </div>

            <button type="submit" className=" text-white btn btn-brown w-100">
              登入
            </button>

            <div className="row mt-4">
              <p className={`text-primary-dark ${styles['notice']}`}>
                還不是會員？
                <Link className="text-primary-dark" href="/member/register">
                  加入我們
                </Link>
                。
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className={` mt-5 text-primary-dark ${styles['hr-sect']}`}>
        快速登入
      </div>
      <div className="row mb-5">
        <div className="col-sm-12 text-start">
          <div className="d-flex justify-content-center">
            {/* <LineLogo className="mx-3" /> */}
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              onClick={loginGoogleRedirect}
            >
              <GoogleLogo className="mx-3" />
            </button>
            {/* <FacebookLogo className="mx-3" /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
