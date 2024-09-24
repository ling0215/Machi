import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './page2.module.scss'
import Swal from 'sweetalert2'
import { FaTruckFast } from 'react-icons/fa6'
import { useAuth } from '@/hooks/use-auth'
import { useCart } from '@/hooks/cart-type-state'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast'

import { addToOrder } from '@/services/cart'

const CartPage2 = ({
  onClickPageTo1,
  onClickPageTo3,
  selectedItems,
  onSelectItems,
  setOrderItem,
}) => {
  const { cart, items, decrement, increment, removeItem, addItem } = useCart()
  useEffect(() => {
    window.scrollTo(0, 0) // 每当组件重新渲染时，将窗口滚动到顶部
  }, [])

  const productTotal =
    selectedItems.products.length > 0
      ? selectedItems.products.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0

  const courseTotal =
    selectedItems.courses.length > 0
      ? selectedItems.courses.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0

  const customTotal =
    selectedItems.custom.length > 0
      ? selectedItems.custom.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0

  const checkTotal = productTotal + courseTotal + customTotal

  const checkAmount =
    (selectedItems.products.length > 0
      ? selectedItems.products.reduce((acc, cur) => acc + cur.quantity, 0)
      : 0) +
    (selectedItems.courses.length > 0
      ? selectedItems.courses.reduce((acc, cur) => acc + cur.quantity, 0)
      : 0) +
    (selectedItems.custom.length > 0
      ? selectedItems.custom.reduce((acc, cur) => acc + cur.quantity, 0)
      : 0)

  const { auth } = useAuth()
  console.log(auth)
  const [payState, setPayState] = useState('')
  const [userDetail, SetUserDetail] = useState()
  const [transName, setTransName] = useState('')
  const [transPhone, setTransPhone] = useState('')
  const [transAddress, setTransAddress] = useState('')
  const [criCard, setCriCard] = useState('')
  const [backCard, setBackCard] = useState('')
  const [cardDate, setCardDate] = useState('')

  useEffect(() => {
    let noDetail = ''
    const missingDetails = []

    if (!auth.userData.user_name) {
      missingDetails.push(' 姓名')
    }
    if (!auth.userData.user_address) {
      missingDetails.push(' 地址')
    }
    if (!auth.userData.user_address) {
      missingDetails.push(' 電話')
    }

    if (missingDetails.length > 0) {
      noDetail = `您的${missingDetails.join('、')} 尚未提供`
    }

    if (userDetail === true) {
      toast.success(`載入個人資料, ${noDetail}`)
    } else if (userDetail === false) {
      toast.error('取消載入個人資料')
    }
  }, [userDetail])

  useEffect(() => {
    if (userDetail === true && auth.userData) {
      setTransName(auth.userData.user_name || '') // 假设 auth.userData.user_name 是用户的真实姓名
      setTransPhone(auth.userData.user_phone || '') // 假设 auth.userData.user_phone 是用户的电话号码
      setTransAddress(auth.userData.user_address || '') // 假设 auth.userData.user_address 是用户的地址
    } else {
      // 清除输入框的状态
      setTransName('')
      setTransPhone('')
      setTransAddress('')
    }
  }, [userDetail, auth.userData])

  const saveOrderData = async () => {
    if (payState !== 'creditCard' && payState !== 'linePay') {
      toast.error('請選擇付款方式')
      return
    }

    if (transName === '' || transAddress === '') {
      toast.error('請輸入姓名和地址')
      return
    }
    if (transPhone.length !== 10) {
      toast.error('請輸入正確的電話號碼')
      return
    }

    const data = {
      data: {
        user_id_fk: auth.userData.user_id,
        payment: payState,
        username: transName,
        address: transAddress,
        phone: transPhone,
        amount: checkAmount,
        total: checkTotal, // 假设总金额即为 total
      },
      items: [
        ...selectedItems.products.map((item) => ({
          product_type: 'product',
          product_id: item.id,
          product_name: item.name,
          product_detail: item.specification,
          product_count: item.quantity,
          product_price: item.price,
        })),
        ...selectedItems.custom.map((item) => ({
          product_type: 'custom',
          product_id: item.id,
          product_name: item.name,
          product_detail: item.specification,
          product_count: item.quantity,
          product_price: item.price,
        })),
        ...selectedItems.courses.map((item) => ({
          product_type: 'course',
          product_id: item.id,
          product_name: item.name,
          product_detail: item.course_date,
          product_count: item.quantity,
          product_price: item.price,
        })),
      ],
    }

    const response = await addToOrder(auth.userData.id, data)

    if (!response.error) {
      setOrderItem(response)
      Swal.fire({
        title: '結帳成功',
        text: '感謝您的購買！',
        icon: 'success',
        confirmButtonColor: '#ab927d',
      })
      clearPurchasedItems(response.items)
      onClickPageTo3() // 在成功设置订单项后跳转到第3页
    } else {
      console.error('Error in response:', response.error)
    }
  }

  const clearPurchasedItems = (items) => {
    items.forEach((item) => {
      removeItem(
        auth.userData.user_id,
        item.order_product_id,
        item.order_product_type
      )
      console.log(auth.userData.user_id)
      console.log(item.order_product_id)
      console.log(item.order_product_type)
    })
  }
  const dateMagic = (data) => {
    const inputDateStr = data

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
    return formatted
  }
  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, '') // 移除非數字字符
    value = value.slice(0, 16) // 限制最多輸入16個數字
    value = value.replace(/(.{4})/g, '$1 ').trim() // 每4個數字添加一個空格
    setCriCard(value)
  }

  const handleCardDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '') // 移除非數字字符
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4) // 在適當位置添加斜杠
    }
    setCardDate(value.slice(0, 5)) // 限制最多輸入5個字符（包括斜杠）
  }

  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex  position-relative g-0 mb-5 `}
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className={`col d-flex gap-1 align-items-center justify-content-start  `}
        >
          <div
            className={`d-flex bg-grey align-items-center justify-content-center  `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white `}>1</div>
          </div>
          <div className={`h4 mb-0   text-grey`}>購物車資訊</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-center`}
        >
          <div
            className={`d-flex bg-brown justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex   `}>2</div>
          </div>
          <div
            className={`h4 mb-0   text-brown ${styles['text-border-brown']} `}
          >
            確認及填寫
          </div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-end`}
        >
          <div
            className={`d-flex bg-grey justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex align-content-center  `}>
              3
            </div>
          </div>
          <div className={`h4 mb-0 text-grey`}>下單成功</div>
        </div>
      </div>
      <div className="main-area row">
        <div className="cart-area col-md-6">
          <button
            div
            className={` ${styles['step-button']}`}
            onClick={onClickPageTo1}
          >
            <div className={`${styles['step-button-text']}`}>上一步</div>
          </button>

          {selectedItems &&
            selectedItems.products &&
            selectedItems.products.length > 0 && (
              <div
                className={` product-area`}
                style={{
                  display: selectedItems.products.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} pb-2 pt-4`}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>商品</div>
                  <div className={` h3`}>({selectedItems.products.length})</div>
                </div>

                {selectedItems.products.map((item, index) => (
                  <div
                    key={index}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140, objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                        style={{ gap: '0.5rem' }}
                      >
                        <div
                          className={`h5 d-inline`}
                          style={{ whiteSpace: 'nowrap' }}
                        ></div>
                        <div className={`h5`}>{item.specification}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={` h4 `}>數量:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}

          {selectedItems &&
            selectedItems.custom &&
            selectedItems.custom.length > 0 && (
              <div
                className={` custom-area`}
                style={{
                  display: selectedItems.custom.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} pb-2 pt-5`}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>客製商品</div>
                  <div className={` h3`}>({selectedItems.custom.length})</div>
                </div>

                {selectedItems.custom.map((item, index) => (
                  <div
                    key={index}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140, objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                        style={{ gap: '0.5rem' }}
                      >
                        <div
                          className={`h5 d-inline`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          規格:
                        </div>
                        <div className={`h5`}>{item.specification}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={` h4 `}>數量:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}

          {selectedItems &&
            selectedItems.courses &&
            selectedItems.courses.length > 0 && (
              <div
                className={`col-sm  class-area`}
                style={{
                  display: selectedItems.courses.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} pb-2 pt-5`}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>課程</div>
                  <div className={` h3`}>
                    ( {selectedItems.courses.length} )
                  </div>
                </div>
                {selectedItems.courses.map((item) => (
                  <div
                    key={item.id}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 m-0 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140, objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column gap-2`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                      >
                        <div
                          className={`h5 d-inline mb-0`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          上課時間:
                        </div>
                        <div className={`h5 mb-0`}>
                          {dateMagic(item.course_date)}
                        </div>
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                      >
                        <div
                          className={`h5 d-inline mb-0`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          地點:
                        </div>
                        <div className={`h5 mb-0`}>{item.course_address}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={`h4`}>人數:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>

        <div className="col"></div>
        <div className={`${styles['pay-area']} col-md-5 `}>
          <div></div>
          <div
            className={'h5 text-primary-dark position-relative'}
            style={{ height: 60 }} // 調整高度以適應兩行文本
          >
            <div className="position-absolute" style={{ bottom: 0, left: 0 }}>
              <FaTruckFast className={'mx-1'} size={24} />
              <span>配送範圍僅台北.新北.桃園</span>
            </div>
          </div>

          <form
            className={`${styles['pay-content']} px-3 py-4 sticky-md-top mb-3 `}
            method="post"
          >
            <div className="h5">付款方式</div>
            <div
              className={`d-flex justify-content-between pb-3 ${styles['text-border-brown']} `}
            >
              <button
                className={`${styles['pay-button']} ${styles['h6']} ${
                  payState === 'bankpay' ? styles['selected'] : ''
                }`}
                type="button"
                onClick={() => {
                  setPayState('bankpay')
                }}
              >
                {payState === 'bankpay' ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                銀行轉帳
              </button>
              <button
                className={`${styles['pay-button']} ${styles['h6']} ${
                  payState === 'creditCard' ? styles['selected'] : ''
                }`}
                type="button"
                onClick={() => {
                  setPayState('creditCard')
                }}
              >
                {payState === 'creditCard' ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                信用卡
              </button>

              <button
                className={`${styles['pay-button']} ${styles['h6']} ${
                  payState === 'linePay' ? styles['selected'] : ''
                }`}
                type="button"
                onClick={() => {
                  setPayState('linePay')
                }}
              >
                {payState === 'linePay' ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                Line pay
              </button>
            </div>

            <div className="h5 pt-2">收件人資訊</div>
            <button
              className={`${styles['h6']} text-grey pb-2`}
              type="button"
              style={{ backgroundColor: 'transparent', border: 'none' }}
              onClick={() => {
                SetUserDetail((prevState) => !prevState)
              }}
            >
              {' '}
              {userDetail === true ? (
                <MdOutlineCheckBox size={28} />
              ) : (
                <MdCheckBoxOutlineBlank size={28} />
              )}
              <span style={{ fontSize: 20 }}>同會員資料</span>
            </button>
            <div className="row d-flex justify-content-between py-2">
              <div className={`col-4  `}>
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                  value={transName}
                  onChange={(e) => setTransName(e.target.value)}
                  placeholder="真實姓名"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                  value={transPhone}
                  onChange={(e) => setTransPhone(e.target.value)}
                  placeholder="09XXXXXXXX"
                />
              </div>
            </div>
            <div
              className={`${styles['text-border-brown']} row d-flex pt-2 pb-5 `}
            >
              <div className={` col `}>
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']}  ${styles['form-control']} ${styles['custom-input']}`}
                  value={transAddress}
                  onChange={(e) => setTransAddress(e.target.value)}
                  placeholder="請填寫完整配送地址"
                />
              </div>
            </div>

            {payState === 'creditCard' && (
              <div
                className={`row d-flex justify-content-between py-2 ${styles['text-border-brown']} `}
              >
                {' '}
                <div className={` row d-flex py-2 `}>
                  <div className={` col `}>
                    信用卡/簽帳金融卡卡號
                    <input
                      type="text"
                      className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']}  ${styles['form-control']} ${styles['custom-input']}`}
                      value={criCard}
                      onChange={handleCardChange}
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-between py-2">
                  <div className={`col-4  `}>
                    背面末三碼
                    <input
                      type="text"
                      className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                      value={backCard}
                      onChange={(e) => setBackCard(e.target.value)}
                      placeholder="000"
                    />
                  </div>
                  <div className="col-6">
                    卡片到期日
                    <input
                      type="text"
                      className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                      value={cardDate}
                      onChange={handleCardDateChange}
                      placeholder="MM/YY"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className={`d-flex justify-content-between py-2 pb-4`}>
              <div className={`${styles['h6']} `}>總購買金額</div>
              <div className={`${styles['h6']} `}>NT$ {checkTotal}</div>
            </div>

            <div className={`d-flex justify-content-center`}>
              <button
                className={`${styles['cart-button']} `}
                onClick={saveOrderData}
                type="button"
              >
                <div className={`${styles['text']} ${styles['link-button']}`}>
                  確認支付
                </div>
              </button>
            </div>
          </form>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#f8dc9a',
              color: '#363636',
            },
          }}
        />
      </div>
    </>
  )
}

export default CartPage2
