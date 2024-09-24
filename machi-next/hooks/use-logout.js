import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import { logout } from '@/services/user'
import Swal from 'sweetalert2'
import { initUserData } from './use-auth'
import useFirebase from './use-firebase'

export function useLogout() {
  const { auth, setAuth } = useAuth()
  const router = useRouter()
  const { logoutFirebase } = useFirebase()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  const handleLogout = async () => {
    await logout()
    await logoutFirebase() // 登出 Firebase
    setAuth({
      ...auth,
      isAuth: false,
      userData: { ...initUserData },
    })
    // 等待一個微任務階段，確保 React 已經完成狀態更新
    await new Promise((resolve) => setTimeout(resolve, 0))
    router.push('/')
    Toast.fire({
      icon: 'success',
      title: '成功登出',
    })
  }

  return handleLogout
}
