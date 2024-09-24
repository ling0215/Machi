import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { updatePassword, checkAuth } from '@/services/user'
import Swal from 'sweetalert2'
import styles from '../member.module.scss'

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

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    // 檢查新密碼和確認密碼是否一致
    if (newPassword !== confirmPassword) {
      Toast.fire({
        icon: 'error',
        title: '新密碼和確認密碼不一致！',
      })
      return
    }

    // 如果密碼檢查都通過，則進行下一步操作...

    try {
      const authResponse = await checkAuth()
      const userId = authResponse.data.data.user.user_id
      const response = await updatePassword(userId, {
        origin: oldPassword,
        new: newPassword,
      })
      console.log(response.data)
      // 更新成功，顯示成功訊息並導向 /member/account 頁面
      Toast.fire({
        icon: 'success',
        title: '密碼更新成功！',
      })
      router.push('/member/account')
    } catch (error) {
      console.error(error)
      Toast.fire({
        icon: 'error',
        title: '更新密碼時出現錯誤',
      })
    }
  }
  return (
    <>
      <div className={`${styles['password-container']} row ms-5 w-50 border rounded d-flex justify-content-center align-items-center`}
      >
        <div className={`${styles['password-from']} col p-2 d-flex justify-content-center align-items-center`}
        >
          <form
            className="d-flex flex-column mx-5 my-3"
            onSubmit={handleSubmit}
          >
            <div className={`${styles['password-label']} form-group my-3 text-primary-dark fw-bold`}>
              <label className={styles['no-wrap']}>
                輸入原密碼
                <input
                  className="form-control"
                  type="password"
                  name="old_password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-group my-3 text-primary-dark fw-bold">
              <label>
                輸入新密碼
                <input
                  className="form-control"
                  type="password"
                  name="new_password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-group my-3 text-primary-dark fw-bold">
              <label>
                再次輸入新密碼
                <input
                  className="form-control"
                  type="password"
                  name="confirm_new_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-group my-3 text-primary-dark fw-bold d-flex justify-content-center">
              <button
                className="btn btn-brown w-50 text-white mt-3"
                type="submit"
              >
                確定修改
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword
