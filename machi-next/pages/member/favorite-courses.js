import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MemberNavBar from '@/components/member/is-auth/member-sidebar'
import FavoriteCourses from '@/components/member/is-auth/favorite-courses'
import { checkAuth } from '@/services/user' 
// import MemberLayout from '@/components/layout/member/member-layout'

function MemberSidebar() {
  const { auth } = useAuth() // 使用 useAuth hook 來獲取 auth 狀態
  const router = useRouter() // 使用 useRouter hook 來獲取 router 物件

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {
    checkAuth().then((response) => {
      if (response.data.status !== 'success') {
        router.push('/member/login')
      }
    })
  }, [router])

  return (
    <>
    <div className="container">
      <div className="d-flex my-5">
        <MemberNavBar />
        <FavoriteCourses />
      </div>
    </div>
    </>
  )
}

export default MemberSidebar
