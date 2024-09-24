import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './toolbar.module.scss'
import { useLogout } from '@/hooks/use-logout'
import { checkAuth } from '@/services/user'

export default function Toolbar({ handleShow }) {
  const [user, setUser] = useState(null)
  const logout = useLogout()

  const handleLogout = async () => {
    const result = await logout()
    if (result) {
      setUser(null) // 登出成功後，將 user 設定為 null
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const response = await checkAuth() // 調用 checkAuth 函數來檢查會員的狀態
      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.user
      ) {
        setUser(response.data.data.user) // 如果會員已登錄，則將會員的狀態設定為 response.data.data.user
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <ul className="navbar-nav pe-2 ms-auto">
        <li className="nav-item">
          <Link
            className="nav-link  btn btn-outline-light"
            href="/cart"
            role="button"
            title="購物車"
          >
            <i className="bi bi-cart-fill"></i>
            <p className="d-none d-md-inline d-lg-none"> 購物車</p>
          </Link>
        </li>
        <li
          // className="nav-item dropdown"
          className={`nav-item dropdown ${styles['dropdown']}`}
        >
          <Link
            className="nav-link dropdown-toggle btn btn-outline-light"
            href=""
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            title="會員中心"
          >
            {user && user.user_image ? (
              <Image
                src={
                  user.user_image.startsWith('http')
                    ? user.user_image
                    : `http://localhost:3005/avatar/${user.user_image}`
                }
                alt="User Avatar"
                width={22}
                height={22}
                style={{
                  borderRadius: '50%', // 使圖片變為圓形
                  objectFit: 'cover', // 控制圖片的填充方式
                }}
              />
            ) : (
              <i className="bi bi-person-circle"></i>
            )}
            <p className="d-none d-md-inline d-lg-none">會員中心</p>
          </Link>
          <ul
            className={`dropdown-menu dropdown-menu-end p-4 mw-100 ${styles['slideIn']} ${styles['dropdown-menu']}`}
          >
            <li>
              <p className="text-center">
                <Image
                  src={
                    user && user.user_image
                      ? user.user_image.startsWith('https')
                        ? user.user_image
                        : `http://localhost:3005/avatar/${user.user_image}`
                      : '/avatar.svg'
                  }
                  className="rounded-circle d-block mx-auto"
                  alt="..."
                  width={80}
                  height={80}
                />
              </p>
              <p className="text-center">
                {user ? '您好' : '尚未登入'}
                <br />
                {user ? user.user_account : ''}
              </p>
            </li>
            <li>
              {user ? (
                <Link
                  className="dropdown-item text-center btn btn-brown"
                  href="/member/account"
                >
                  會員專區
                </Link>
              ) : (
                <Link
                  className="dropdown-item text-center btn btn-brown"
                  href="/member/register"
                >
                  {' '}
                  註冊
                </Link>
              )}
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              {user ? (
                <button
                  className="dropdown-item text-center btn btn-brown"
                  onClick={handleLogout}
                >
                  登出
                </button>
              ) : (
                <Link
                  className="dropdown-item text-center btn btn-brown"
                  href="/member/login" // 將 "/login" 替換為你的登入頁面的 URL
                >
                  登入
                </Link>
              )}
            </li>
          </ul>
        </li>

        {/* <li className="nav-item">
        <span
          className="nav-link  btn btn-outline-light"
          role="presentation"
          onClick={(e) => {
            e.preventDefault()
            handleShow()
          }}
          title="展示"
        >
          <i className="bi bi-mortarboard-fill"></i>
          <p className="d-none d-md-inline d-lg-none"> 展示</p>
        </span>
      </li> */}
      </ul>
    </>
  )
}
