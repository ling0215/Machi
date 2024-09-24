import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { getProductsByIds } from '@/services/user'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function FavoriteProducts() {
  const router = useRouter()
  const { favorites, setFavorites } = useAuth()
  const [products, setProducts] = useState([])

  const productFavorites = favorites.filter((num) => num > 10821)

  useEffect(() => {
    getProductsByIds(productFavorites)
      .then((response) => {
        setProducts(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
  }, [favorites])

  const isFavoriteProductsPage = router.pathname === '/member/favorite-products'
  const buttonClass = isFavoriteProductsPage
    ? 'btn-brown text-white'
    : 'btn-outline-brown'

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <Link href={`/member/favorite-products`}>
            {' '}
            <button className={`btn ${buttonClass}`}>商品收藏</button>{' '}
          </Link>
          <Link href={`/member/favorite-courses`}>
            {' '}
            <button className="btn btn-outline-brown">課程收藏</button>{' '}
          </Link>
        </div>

        <hr className="my-3 mt-5" />

        <div className="row mt-5">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 col-6 g-3">
              <div className="card">
                <Link href={`/product/${product.product_id}`}>
                  <Image
                    loading="lazy"
                    src={`/images/product/card/${product.product_id}1.jpg`}
                    alt={product.product_name}
                    width={200}
                    height={200}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body text-center">
                  <p className="card-text text-brown">{product.product_name}</p>
                  <p className="card-text text-primary-dark">NT${product.product_price_small}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white;
          border-color: var(--grey);
        }
      `}</style>
    </>
  )
}

export default FavoriteProducts
