import React, { useState, useEffect } from 'react'
import { fetchBetterOrders } from '@/services/user'
import Pagination from '@/components/product/product-list/pagination'
import { checkAuth } from '@/services/user'
import Link from 'next/link'

export default function OrderQueryForm() {
  const [orders, setOrders] = useState({ orders: [] })
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const now = new Date()
  const formattedDate = now.toLocaleDateString('fr-CA') // 'fr-CA' locale uses the 'YYYY-MM-DD' format
  const [tempStartDate, setTempStartDate] = useState(formattedDate)
  const [tempEndDate, setTempEndDate] = useState(formattedDate)
  const [startDate, setStartDate] = useState('1970-01-01')
  const [endDate, setEndDate] = useState('2050-01-01')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const fetchUserId = async () => {
      const res = await checkAuth()
      const id = res.data.data.user.user_id
      console.log(id)
      setUserId(id)
    }

    fetchUserId()
  }, [])

  useEffect(() => {
    const getOrders = async () => {
      const response = await fetchBetterOrders(
        page,
        8,
        startDate,
        endDate,
        userId,
        selectedStatus
      )
      setOrders(response.data)
    }

    getOrders()
  }, [userId, page, startDate, endDate, selectedStatus])

  const myorders = orders.orders
  console.log(myorders)

  const handlePageChange = (page) => {
    window.scrollTo(0, 0)
    setPage(page)
  }

  return (
    <>
      <div className="container p-2 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <button
            className={`btn ${
              selectedStatus === '未完成'
                ? 'btn-brown text-white'
                : 'btn-outline-brown'
            }`}
            onClick={() => setSelectedStatus('未完成')}
          >
            未完成
          </button>
          <button
            className={`btn ${
              selectedStatus === '已完成'
                ? 'btn-brown text-white'
                : 'btn-outline-brown'
            }`}
            onClick={() => setSelectedStatus('已完成')}
          >
            已完成
          </button>
        </div>
        <div className="mt-4  gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="w-100 text-primary-dark">查詢訂單時間</div>
            <input
              type="date"
              className="form-control"
              value={tempStartDate}
              onChange={(e) => setTempStartDate(e.target.value)}
            />
            <div className="border-top border-2 w-25"></div>
            <input
              type="date"
              className="form-control"
              value={tempEndDate}
              onChange={(e) => setTempEndDate(e.target.value)}
            />
          </div>
          <div className="d-flex mt-2 justify-content-end align-items-center gap-3">
            <button
              className="btn btn-brown text-white"
              onClick={() => {
                setStartDate(tempStartDate)
                setEndDate(tempEndDate)
              }}
            >
              確定送出
            </button>
            <button
              className="btn btn-brown text-white"
              onClick={() => {
                setStartDate('1970-01-01')
                setEndDate('2050-01-01')
              }}
            >
              取消查詢
            </button>
          </div>
        </div>
        <hr className="my-4 mt-5" />
        <div className="d-flex justify-content-around text-primary-dark">
          <div>收件人</div>
          <div>訂單日期</div>
          <div>訂單編號</div>
          <div>付款方式</div>
          <div>訂單狀態</div>
        </div>
        <hr className="my-2 mb-4" />

        {myorders.map((order, index) => (
          <div
            key={index}
            className="d-flex justify-content-around text-primary-dark"
          >
            <div>{order.order_username}</div>
            <div>{order.order_createtime}</div>
            <Link
              href={`/member/order-query/${order.order_id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="text-primary-dark">{order.order_id}</div>
            </Link>
            <div>{order.order_payment}</div>
            <div>{order.order_status}</div>
            {/* 其他需要顯示的訂單資訊 */}
          </div>
        ))}

        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>

      <style jsx>{`
        .btn-brown {
          height: 40px;
        }

        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white;
          border-color: var(--grey);
        }
      `}</style>
    </>
  )
}
