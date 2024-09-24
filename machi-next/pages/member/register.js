import React from 'react'
import RegisterForm from '@/components/member/is-not-auth/register-form'
import LoginNavBar from '@/components/member/is-not-auth/login-navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'

function Register() {
  const { auth } = useAuth() // 使用 useAuth hook 來獲取 auth 狀態
  const router = useRouter() // 使用 useRouter hook 來獲取 router 物件

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {
    if (auth.isAuth) {
      router.push('/member-center') // 如果 auth.isAuth 為 true，則導向會員中心
    }
  }, [auth.isAuth, router])

  return (
    <>
      <LoginNavBar />
      <RegisterForm />
    </>
  )

}

export default Register
