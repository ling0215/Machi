import { useEffect } from 'react'
// 樣式
import '@/styles/globals.scss'
import '@/styles/product.scss'
import '@/styles/loader.scss'
import '@/styles/customize.scss'
import '@/styles/blog.scss'
import '@/styles/homepage.scss'

//測試資料
import dataCartItems from '@/data/cart/test.json'
// 載入購物車context
import { CartTypeProvider } from '@/hooks/cart-type-state'
// 載入認証用context
import { AuthProvider } from '@/hooks/use-auth'
// 載入動畫context
import { LoaderProvider } from '@/hooks/use-loader'

import { CustomizeProvider } from '@/hooks/use-customize'

import DefaultLayout from '@/components/layout/default-layout'
// 自訂用載入動畫元件
import { CatLoader, NoLoader } from '@/hooks/use-loader/components'

export default function MyApp({ Component, pageProps }) {
  // console.log(dataCartItems)

  // 導入bootstrap的JS函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案，對應`components/layout/default-layout/index.js`
  // 或`components/layout/default-layout.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <AuthProvider>
      <CustomizeProvider>
        <CartTypeProvider>
          <LoaderProvider close={2} CustomLoader={CatLoader}>
            {getLayout(<Component {...pageProps} />)}
          </LoaderProvider>
        </CartTypeProvider>
      </CustomizeProvider>
    </AuthProvider>
  )
}
