import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductDetail from '@/components/product/product-detail'
import { fetchRawProduct } from '@/services/product'

export default function Detail() {
  const router = useRouter()
  const { pid } = router.query
  const [productData, setProductData] = useState(null)
  console.log(111)
  console.log(pid)

  useEffect(() => {
    if (pid) {
      fetchRawProduct(pid)
        .then((data) => {
          console.log(data) // 打印獲取到的數據
          setProductData(data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [pid])

  return (
    <div>
      {productData ? <ProductDetail product={productData} /> : 'Loading...'}
    </div>
  )
}
