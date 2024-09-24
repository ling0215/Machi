import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchOrderItems } from '@/services/user'
import Link from 'next/link'

export default function OrderItemForm() {
  const router = useRouter()
  const { oid } = router.query
  const [orderItems, setOrderItems] = useState([])
  const [productItems, setProductItems] = useState([])
  const [customItems, setCustomItems] = useState([])
  const [courseItems, setCourseItems] = useState([])

  useEffect(() => {
    if (oid) {
      fetchOrderItems(oid).then((response) => {
        console.log(response);
        const productItems = response.filter(
          (item) => item.order_product_type === 'product'
        )
        const customItems = response.filter(
          (item) => item.order_product_type === 'custom'
        )
        const courseItems = response.filter(
          (item) => item.order_product_type === 'course'
        )
        setProductItems(productItems)
        setCustomItems(customItems)
        setCourseItems(courseItems)
        setOrderItems(response)


      })
    }
  }, [oid])

  console.log(productItems)
  console.log(customItems)
  console.log(courseItems)


  function formatDate(dateString) {
    const date = new Date(dateString)
    const formattedDate = `${date.getUTCFullYear()}-${String(
      date.getUTCMonth() + 1
    ).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`
    const formattedTime = `${String(date.getUTCHours()).padStart(
      2,
      '0'
    )}:${String(date.getUTCMinutes()).padStart(2, '0')}`
    return `${formattedDate} ${formattedTime}`
  }

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="mt-4 d-flex gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="w-100 text-primary-dark">訂單編號：{oid}</div>
          </div>
        </div>
        {productItems.length > 0 && (
          <div>
            <hr className="my-4 mt-5" />
            <div className="d-flex justify-content-around text-primary-dark">
              <div className="col-4">商品項目</div>
              <div className="col-3">訂單規格</div>
              <div className="col">商品單價</div>
              <div className="col">商品數量</div>
              <div className="col">小計</div>
            </div>
            <hr className="my-2 mb-4" />

            {productItems.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around text-primary-dark"
              >
                {/* <div className="col-4">{item.order_product_name}</div> */}
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href={`/product/${item.order_product_id}`}
                  className="col-4"
                >
                  {' '}
                  {item.order_product_name}
                </Link>
                <div className="col-3">{item.order_product_detail}</div>
                <div className="col">{item.order_product_price}</div>
                <div className="col">{item.order_product_count}</div>
                <div className="col">
                  {item.order_product_price * item.order_product_count}
                </div>
              </div>
            ))}
          </div>
        )}

        {courseItems.length > 0 && (
          <div>
            <hr className="my-4 mt-5" />
            <div className="d-flex justify-content-around text-primary-dark">
              <div className="col-4">課程項目</div>
              <div className="col-3">開課時間</div>
              <div className="col">商品單價</div>
              <div className="col">商品數量</div>
              <div className="col">小計</div>
            </div>
            <hr className="my-2 mb-4" />

            {courseItems.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around text-primary-dark"
              >
                {/* <div className="col-4">{item.order_product_name}</div> */}
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href={`/course/${item.order_product_id}`}
                  className="col-4"
                >
                  {item.order_product_name}
                </Link>
                <div className="col-3">
                  {formatDate(item.order_product_detail)}
                </div>
                <div className="col">{item.order_product_price}</div>
                <div className="col">{item.order_product_count}</div>
                <div className="col">
                  {item.order_product_price * item.order_product_count}
                </div>
              </div>
            ))}
          </div>
        )}

        {customItems.length > 0 && (
          <div>
            <hr className="my-4 mt-5" />
            <div className="d-flex justify-content-around text-primary-dark">
              <div className="col-4">客製項目</div>
              <div className="col-3">訂單規格</div>
              <div className="col">商品單價</div>
              <div className="col">商品數量</div>
              <div className="col">小計</div>
            </div>
            <hr className="my-2 mb-4" />

            {customItems.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around text-primary-dark"
              >
                <div className="col-4">{item.order_product_name}</div>
                <div className="col-3">{item.order_product_detail}</div>
                <div className="col">{item.order_product_price}</div>
                <div className="col">{item.order_product_count}</div>
                <div className="col">
                  {item.order_product_price * item.order_product_count}
                </div>
              </div>
            ))}
          </div>
        )}
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
