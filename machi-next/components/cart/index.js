import React, { useState, useEffect } from 'react'

import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'
import CartPage3 from '@/components/cart/cart-page3'

export default function CartMain() {
  const [showPage, setShowPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState()
  const [backSelectedItems, setBackSelectedItems] = useState()
  const [orderItem, setOrderItem] = useState()
  console.log(orderItem)

  const handleClick = (page) => {
    setShowPage(page)
  }

  const handleSelectedItems = (items) => {
    setSelectedItems(items)
  }

  const handleOrderItems = (items) => {
    setOrderItem(items)
  }
  useEffect(() => {
    if (showPage === 2) {
      setBackSelectedItems(selectedItems)
    }
  }, [showPage])

  useEffect(() => {
    if (orderItem) {
      // 当 orderItem 更新时，跳转到 Page 3
      handleClick(3)
    }
  }, [orderItem])

  const renderPage = () => {
    switch (showPage) {
      case 1:
        return (
          <CartPage1
            onClickPage={() => handleClick(2)}
            selectedItems={selectedItems}
            onSelectItems={handleSelectedItems}
          />
        )
      case 2:
        return (
          <CartPage2
            onClickPageTo1={() => handleClick(1)}
            onClickPageTo3={() => handleClick(3)} // 这里不需要手动跳转
            selectedItems={selectedItems}
            onSelectItems={handleSelectedItems}
            setOrderItem={handleOrderItems} // 确保这里传递了正确的函数
          />
        )
      case 3:
        return <CartPage3 orderItem={orderItem} />
      default:
        return null
    }
  }

  return renderPage()
}
