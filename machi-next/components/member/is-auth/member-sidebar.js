import React from 'react'
import Link from 'next/link'
import styles from '../member.module.scss'

function MemberSidebar() {
  return (
    <div className={`${styles['menu']} d-lg-block d-lg-block   me-lg-5`}>
      <ul className='d-flex flex-column list-unstyled'>
        <li className='p-2 '>
          <Link href="/member/account" className={`${styles['member-sidebar']} p-2`} >會員資料</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/update-password" className={`${styles['member-sidebar']} p-2`} >修改密碼</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/order-query" className={`${styles['member-sidebar']} p-2`} >訂單查詢</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/favorite-products" className={`${styles['member-sidebar']} p-2`} >收藏清單</Link>
        </li>

      </ul>
    </div>
  )
}

export default MemberSidebar
