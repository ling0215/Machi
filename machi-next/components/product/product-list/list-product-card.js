import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'
import Image from 'next/image'
import { IoCartOutline } from 'react-icons/io5'
import FavFcon from './fav-icon'
import Swal from 'sweetalert2'

export default function ListProductCard({ product }) {
  const imageUrl = `/images/product/card/${product.product_id}1.jpg`

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

  return (
    <>

        {/* <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-1 g-4 d-flex flex-row"> */}
            <div className="card w-100" style={{ height: 'auto' }}>
              <div className="row g-0 h-100">
                <div className="col-md-3 d-flex align-items-center py-2 w-5">
                  <Link href={`/product/${product.product_id}`} passHref>
                    <Image
                      src={imageUrl}
                      className={`img-fluid rounded ${styles['img-pc']} ${styles['img-mobile']}`}
                      alt="productImg"
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      width={200}
                      height={180}
                      objectFit="cover"
                    />
                  </Link>
                </div>
                <div className="col-md-8 mt-2">
                  <div className="card-body d-flex flex-column justify-content-between h-100  p-1">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className={styles.cardText}>{product.product_name.slice(0, 20)}</h5>
                        <FavFcon
                          id={product.product_id}
                          style={`${styles.heartIconList} d-flex justify-content-end`}
                        />
                      </div>
                      <p className="card-text mt-2">{product.product_category}</p>
                    </div>
                    <div className="col-md-12">
                      <div className="card-text d-flex justify-content-between mt-3">
                        <p className=" text-primary-dark fw-bold fs-4">
                          NT${product.product_price_small}
                        </p>
                        <button
                          className={`btn btn-outline-primary w-auto p-2 mb-2 ${styles.cartBtn}`}
                        >
                          <IoCartOutline className={styles.cartIcon} /> 加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
      <style jsx>{`
       
      `}</style>
    </>
  )
}
