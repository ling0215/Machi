import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/use-auth'
import LoginForm from '@/components/member/is-not-auth/login-form'
import LoginNavBar from '@/components/member/is-not-auth/login-navbar'
import { checkAuth } from '@/services/user'

function Login() {
  const { auth } = useAuth() // 使用 useAuth hook 來獲取 auth 狀態
  const router = useRouter() // 使用 useRouter hook 來獲取 router 物件

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {
    checkAuth().then((response) => {
      if (response.data.status == 'success') {
        router.push('/member/account')
      }
    })
  }, [router])

  return (
    <>
      <LoginNavBar />
      <LoginForm />
    </>
  )

}

export default Login
