import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MemberNavBar from '@/components/member/is-auth/member-sidebar'
import OrderQueryForm from '@/components/member/is-auth/order-query-form'
import { checkAuth } from '@/services/user'
import OrderItemForm from '@/components/member/is-auth/order-item-form'

function OrderQuery() {
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
          <OrderItemForm />
        </div>
      </div>
      {/* <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.date} - {order.amount} - {order.status}
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default OrderQuery
