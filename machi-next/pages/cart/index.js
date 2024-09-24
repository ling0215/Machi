import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { checkAuth } from '@/services/user' // 引入 checkAuth 函數
import CartMain from '@/components/cart'

export default function CartindexIndex() {
  const router = useRouter() // 使用 useRouter hook 來獲取 router 物件
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {
    checkAuth().then((response) => {
      if (response.data.status !== 'success') {
        router.push('/member/login')
      } else {
        setIsAuthenticated(true)
      }
    })
  }, [router])

  return isAuthenticated ? <CartMain /> : null
}
