import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './page3.module.scss'

const CartPage3 = ({ orderItem }) => {
  const router = useRouter()
  const [formattedDate, setFormattedDate] = useState('')
  const [products, setProducts] = useState([])
  const [courses, setCourses] = useState([])
  const [customs, setCustoms] = useState([])

  useEffect(() => {
    console.log('orderItem:', orderItem)
    if (orderItem && orderItem.data && orderItem.data.order_createtime) {
      const inputDateStr = orderItem.data.order_createtime

      // 创建 Date 对象
      const date = new Date(inputDateStr)

      // 获取年份、月份、日期、小时和分钟
      const year = date.getUTCFullYear()
      const month = String(date.getUTCMonth() + 1).padStart(2, '0')
      const day = String(date.getUTCDate()).padStart(2, '0')
      const hours = String(date.getUTCHours()).padStart(2, '0')
      const minutes = String(date.getUTCMinutes()).padStart(2, '0')

      // 组合成所需的格式
      const formatted = `${year}-${month}-${day}-${hours}:${minutes}`
      setFormattedDate(formatted)
    }

    if (orderItem && orderItem.items) {
      const productItems = orderItem.items.filter(
        (item) => item.order_product_type === 'product'
      )
      const courseItems = orderItem.items.filter(
        (item) => item.order_product_type === 'course'
      )
      const customItems = orderItem.items.filter(
        (item) => item.order_product_type === 'custom'
      )

      setProducts(productItems)
      setCourses(courseItems)
      setCustoms(customItems)
    }
  }, [orderItem])

  useEffect(() => {
    window.scrollTo(0, 0) // 每当组件重新渲染时，将窗口滚动到顶部
  }, [])

  if (!orderItem || !orderItem.data || !orderItem.items) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex position-relative g-0`}
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className={`col d-flex gap-1 align-items-center justify-content-start`}
        >
          <div
            className={`d-flex bg-grey align-items-center justify-content-center`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white`}>1</div>
          </div>
          <div className={`h4 mb-0 text-grey`}>購物車資訊</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-center`}
        >
          <div
            className={`d-flex bg-grey justify-content-center align-items-center`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex`}>2</div>
          </div>
          <div className={`h4 mb-0 text-grey`}>確認及填寫</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-end`}
        >
          <div
            className={`d-flex bg-brown justify-content-center align-items-center`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex align-content-center`}>
              3
            </div>
          </div>
          <div className={`h4 mb-0 text-brown ${styles['text-border-brown']}`}>
            下單成功
          </div>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center h3 text-brown py-4`}
      >
        您的訂單已成立,感謝您的購買{' '}
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div className={`col-md-5 d-flex flex-column px-0`} style={{ gap: 12 }}>
          <div className={`text-brown h5`}>商品資料</div>
          <div className={`d-flex align-items-center justify-content-between`}>
            <div className={`${styles['h6']} text-dark-grey`}>訂購日期</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {formattedDate}
            </div>
          </div>
          <div className={`d-flex align-items-center justify-content-between`}>
            <div className={`${styles['h6']} text-dark-grey`}>訂單編號</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {orderItem.items[0].order_item_id}
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-between pb-4 ${styles['text-border-brown']}`}
          >
            <div className={`${styles['h6']} text-dark-grey`}>付款方式</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {orderItem.data.order_payment}
            </div>
          </div>
          <div className={`text-brown h5`}>購買項目</div>

          {products.length > 0 && (
            <>
              <div className={`text-brown ${styles['h6']}`}>一般商品</div>
              {products.map((item) => (
                <div
                  className="d-flex align-items-center justify-content-between"
                  key={item.order_item_id}
                >
                  <div className={`text-dark-grey`}>
                    {item.order_product_name}
                  </div>
                  <div className={`text-dark-grey`}>
                    <span>數量: {item.order_product_count}</span>
                  </div>
                </div>
              ))}
            </>
          )}

          {customs.length > 0 && (
            <>
              <div className={`text-brown ${styles['h6']}`}>客製商品</div>
              {customs.map((item) => (
                <div
                  className="d-flex align-items-center justify-content-between"
                  key={item.order_item_id}
                >
                  <div className={`text-dark-grey`}>
                    {item.order_product_name}
                    <span>({item.order_product_detail})</span>
                  </div>
                  <div className={`text-dark-grey`}>
                    <span>數量: {item.order_product_count}</span>
                  </div>
                </div>
              ))}
            </>
          )}

          {courses.length > 0 && (
            <>
              <div className={`text-brown ${styles['h6']}`}>課程</div>
              {courses.map((item) => (
                <div
                  className="d-flex align-items-center justify-content-between"
                  key={item.order_item_id}
                >
                  <div className={` text-dark-grey`}>
                    {item.order_product_name}
                  </div>
                  <div className={` text-dark-grey`}>
                    <span>人數: {item.order_product_count}</span>
                  </div>
                </div>
              ))}
            </>
          )}

          <div
            className={`d-flex align-items-center justify-content-between pt-3`}
          >
            <div className={`h4 text-brown`}>商品總額</div>
            <div className={`h5 text-brown`}>
              NT$ {orderItem.data.order_total}
            </div>
          </div>
          <div className={`d-flex align-items-center justify-content-end py-4`}>
            <button
              className={`h5 ${styles['custom-button-home']} text-white`}
              onClick={() => router.push('/')} // 这里是返回首页的URL
            >
              返回首頁
            </button>
            <button
              className={`h5 ${styles['custom-button-order']} text-white ms-3`}
              onClick={() => router.push('/member/order-query')} // 这里是历史订单的URL
            >
              歷史訂單
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage3
