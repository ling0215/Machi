// index.js
import React, { useState } from 'react'
import Carousel from '@/components/product/product-detail/carousel'
import { IoCartOutline } from 'react-icons/io5'
import FavFcon from '@/components/product/product-list/fav-icon'
import ProductIntro from '@/components/product/product-detail/product-intro'
import { useCart } from '@/hooks/cart-type-state'
import { checkAuth } from '@/services/user'
import Swal from 'sweetalert2'
import { AuthProvider, useAuth } from '@/hooks/use-auth'
import { addToCart } from '@/services/cart'
import { addFav, removeFav, getFavs } from '@/services/user'

export default function ProductDetail(product) {
  const newProduct = product.product
  const [size, setSize] = useState(
    newProduct.product_subtitle_middle === '9吋' ? '6吋' : ''
  )
  const changeSize = (newSize) => {
    setSize(newSize)
  }
  const [quantity, setQuantity] = useState(1)

  const price =
    size === '9吋'
      ? newProduct.product_price_middle
      : newProduct.product_price_small

  const { addItem } = useCart()

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

  // 我的最愛
  const { favorites, setFavorites } = useAuth()
  const isFavorite = favorites.includes(newProduct.product_id)

  const handleFavoriteClick = async () => {
    if (isFavorite) {
      await removeFav(newProduct.product_id)
    } else {
      await addFav(newProduct.product_id)
    }
    const newFavorites = await getFavs()
    setFavorites(newFavorites.data.data.favorites)
  }

  return (
    <>
      <div className="row mt-5 mx-2 d-flex justify-content-center ">
        <div className="col-md-5">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel pid={newProduct.product_id} />
          </div>
        </div>
        <div className="col-md-6 ms-3 product-info">
          <h4 className="text-primary-dark mt-2">{newProduct.product_name}</h4>
          <p className="text-muted">蛋糕</p>
          <p className="product-desc mb-4">{newProduct.product_description}</p>
          {newProduct.product_subtitle_middle === '9吋' ? (
            <div className="mb-4">
              <p className={`text-primary-dark`}>尺寸</p>
              <button
                className={`btn ${
                  size === '6吋' ? 'btn-brown text-white' : 'btn-outline-brown'
                } col-md-2 me-3`}
                onClick={() => changeSize('6吋')}
              >
                6吋
              </button>
              <button
                className={`btn ${
                  size === '9吋' ? 'btn-brown text-white' : 'btn-outline-brown'
                } col-md-2`}
                onClick={() => changeSize('9吋')}
              >
                9吋
              </button>
            </div>
          ) : (
            <div className="my-5"></div>
          )}
          {/* 數量按鈕 */}
          <div
            className={`d-flex g-3 justify-content-between align-items-center mb-4 addbuton`}
          >
            <div
              className={`btn-group d-flex`}
              role={`group`}
              aria-label={`Basic mixed styles example`}
              style={{
                width: '128px',
                height: '48px',
              }}
            >
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1)
                  }
                }}
              >
                -
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
              >
                {quantity}
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center text-primary-dark">
              <p className="pe-2">售價</p>
              <h4 className="text-primary-dark">{price}</h4>
            </div>
          </div>

          <div className="mb-4 d-flex justify-content-center align-items-center w-100">
            <div className="col-6 pe-2">
              <button
                className="btn btn-outline-brown w-100 cartBtn"
                onClick={async () => {
                  const response = await checkAuth()
                  if (response.data.status === 'success') {
                    const data = {
                      product_id_fk: newProduct.product_id,
                      product_name: newProduct.product_name,
                      product_price: price,
                      product_count: quantity,
                      product_subtitle: size,
                    }
                    addItem(data)
                      .then((response) => {
                        Toast.fire({
                          icon: 'success',
                          title: '成功加入購物車',
                        })
                      })
                      .catch((error) => {
                        console.error('添加失敗:', error)
                      })
                  } else {
                    console.log('用戶未登入')
                  }
                }}
              >
                <IoCartOutline className="fs-3 pb-1 cart-icon" /> 加入購物車
              </button>
            </div>
            <div className="col-6 ps-2">
              <button
                className="btn btn-brown text-white btn-lg w-100 buynowBtn"
                onClick={async () => {
                  const response = await checkAuth()
                  if (response.data.status === 'success') {
                    const data = {
                      product_id_fk: newProduct.product_id,
                      product_name: newProduct.product_name,
                      product_price: price,
                      product_count: quantity,
                      product_subtitle: size,
                    }
                    addItem(data)
                      .then((response) => {
                        Swal.fire({
                          title: '已加入購物車',
                          text: '您的商品已成功加入購物車！',
                          icon: 'success',
                          confirmButtonColor: '#ab927d',
                          confirmButtonText: '前往購物車',
                        }).then(() => {
                          window.location.href = '/cart'
                        })
                      })
                      .catch((error) => {
                        console.error('添加失敗:', error)
                      })
                  } else {
                    console.log('用戶未登入')
                  }
                }}
              >
                立即購買
              </button>
            </div>
          </div>
          <div className="col-md-6 text-start text-primary-dark">
            <FavFcon id={newProduct.product_id} style="fs-3 text-heart" />{' '}
            加入追蹤清單
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <ProductIntro
          pid={newProduct.product_id}
          description={newProduct.product_description}
        />
      </div>

      <style jsx>{`
        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white;
        }
        .cart-icon:hover {
          color: white;
        }
      `}</style>
    </>
  )
}
