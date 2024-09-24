import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import MemberNavBar from '@/components/member/is-auth/member-sidebar'
import EditProfileForm from '@/components/member/is-auth/edit-profile-form'
import { checkAuth } from '@/services/user' // 引入 checkAuth 函數
import UpdatePassword from '@/components/member/is-auth/update-password'

function MemberSidebar() {
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
        <div className="d-sm-flex d-block my-5">
          <MemberNavBar />
          <UpdatePassword />
        </div>
      </div>
    </>
  )
}

export default MemberSidebar
