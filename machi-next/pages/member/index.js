import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { checkAuth } from '@/services/user' // 引入 checkAuth 函數

export default function MemberIndex() {
  const router = useRouter() // 使用 useRouter hook 來獲取 router 物件

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {
    checkAuth().then((response) => {
      if (response.data.status !== 'success') {
        router.push('/member/login')
      } else {
        router.push('/member/account')
      }
    })
  }, [router])

  return <></>
}