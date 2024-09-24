import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'
import CakePreview from '@/components/customize/cake-preview'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import { useCustomize } from '@/hooks/use-customize'
import { useCart } from '@/hooks/cart-type-state'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function CustomizedCart() {
  const { customize, setDefaultCustomize, pictureUrl } = useCustomize()
  const [customTotNum, setCustomTotNum] = useState(1)
  const { addItem } = useCart()
  let totPrice = customize.sizePrice.price * customTotNum

  function customIncrement() {
    setCustomTotNum(customTotNum + 1)
  }

  function customDecrement() {
    if (customTotNum > 1) {
      setCustomTotNum(customTotNum - 1)
    }
  }
  // console.log(111)
  // console.log(pictureUrl)

  const customCart = {
    custom_count: customTotNum,
    custom_price: customize.sizePrice.price,
    custom_size: customize.sizePrice.size,
    custom_layer: customize.layer,
    custom_flavor: customize.flavor,
    custom_decor: customize.deco,
    custom_img: pictureUrl,
    // custom_preview: customize.preview,
  }

  console.log(customCart)
  const addCart = () => {
    addItem(customCart).then(() => {
      Swal.fire({
        title: '已加入購物車',
        text: '您的商品已成功加入購物車！',
        icon: 'success',
        confirmButtonColor: '#ab927d',
      })
    })
    console.log('customCart')
    console.log(customCart)
  }

  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps stepNumber="1" stepText="選擇蛋糕尺寸" />
          <Steps stepNumber="2" stepText="選擇蛋糕口味及樣式" />
          <Steps
            active={true}
            // bgStyle={styles['bg-yellow']}
            // textStyle={styles['custom-text-border-yellow']}
            stepNumber="3"
            stepText="加入購物車"
          />
        </div>
        <StepTitle
          title="Step 3 : 加入購物車"
          shouldHide1
          prvLink="/customized-products/deco"
          shouldHide2
          nextLink="/customized-products/deco"
        />
        <div className="lynn-deco-preview">
          <div className="lynn-preview-section">
            <CakePreview size="6吋" />
            <div className="lynn-preview-cake">
              <CakeSize imageSize={170} size="預覽示意圖" price=" " />
            </div>
          </div>
          <div className="lynn-cart-selection">
            <div className="lynn-cart-price-num">
              <div className="lynn-cart-price">
                <span>價格：</span>
                <span>{`NT$${customize.sizePrice.price}`}</span>
              </div>

              {/* 數量按鈕 */}
              <div className="lynn-cart-price">
                <div
                  className={`d-flex justify-content-between align-items-center mb-1 addbuton lynn-addbutton`}
                >
                  <span>數量：</span>
                  <div
                    className={`btn-group d-flex ms-5`}
                    role={`group`}
                    aria-label={`Basic mixed styles example `}
                    style={{
                      width: '130px',
                      height: '38px',
                    }}
                  >
                    <button
                      className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                      style={{ width: '24px' }}
                      onClick={customDecrement} // 减少数量的點擊事件
                    >
                      -
                    </button>
                    <button
                      className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                    >
                      {customTotNum}
                      {/* {item.quantity} */}
                    </button>
                    <button
                      className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                      style={{ width: '24px' }}
                      onClick={customIncrement} // 增加数量的點擊事件
                    >
                      +
                    </button>
                  </div>
                  {/* <div className={` h4 `}>小計NT${item.subtotal}</div> */}
                </div>
              </div>
            </div>
            <hr className="lynn-done-select" />
            <div className="lynn-cart-price">
              <span>總額：</span>
              <span>{`NT$${totPrice}`}</span>
            </div>
            <div className="lynn-deco-confirm">
              <Link href="/customized-products/size" passHref>
                <button
                  className="lynn-btn-grey"
                  onClick={() => setDefaultCustomize()}
                >
                  繼續客製蛋糕
                </button>
              </Link>
              <Link href="/customized-products/cart" passHref>
                <button
                  className="lynn-btn-brown"
                  onClick={() => {
                    addCart()
                  }}
                >
                  <IoCartOutline className="lynn-cart" />
                  加入購物車
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
