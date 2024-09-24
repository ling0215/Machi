import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getProductsHomepage } from '@/services/homepage'

const CardProdcut = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsHomepage()
      setProducts(response.data.data.products)
    }

    fetchProducts()
  }, [])

  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className="col-md-3 d-flex justify-content-center mb-4"
        >
          <div className="w-350 no-border f-16 featured-card">
            <Link href={`/product/${product.product_id}`} passHref className="no-underline">
              <img
                src={`/images/product/card/${product.product_id}1.jpg`}
                className="card-img-top"
                alt=""
              />
              <div className="card-body no-space-x">
                <p className="card-text note-text mt-1">新品上市</p>
                <h5 className="card-text fw-bold card-title">
                  {product.product_name}
                </h5>
                <p className="card-text type-text mb-2">
                  {product.product_category}
                </p>
                <p className="h-currency bold h-now">
                  NT${product.product_price_small.toLocaleString()} &nbsp;
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardProdcut
