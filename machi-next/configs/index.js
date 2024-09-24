export const PORT = 3000
export const DEV = true

// express 的位置
export const apiBaseUrl = 'http://localhost:3005/api'
export const avatarBaseUrl = 'http://localhost:3005/avatar'

// breadcrumb面包屑使用
// 用pathname英文對照中文的名稱(類似關聯陣列的物件)
// 使用方式需用 ex. pathnameLocale['home']
// 下面是防止自動格式化使用註解
/* eslint-disable */
// prettier-ignore
export const pathsLocaleMap = {
  'customized-products': '客製化蛋糕',
  'size': '選擇尺寸',
  'deco': '選擇口味及裝飾',
  'cart':'購物車',
  'forget-password':'重設密碼',
  'register':'註冊',
  'login':'登入',
  'member':'會員',
  'news':'新聞',
  'about': '關於我們',
  'product': '產品',
  'detail': '產品細節',
  'men': '男性',
  'women': '女性',
  'category': '分類',
  'list': '列表',
  'mobile': '手機',
  'pc': '電腦',
  'student': '學生資料',
  'com-test':'元件測試',
  'breadcrumb':'麵包屑',
  'home':'首頁',
  'posts':'張貼文章',
  'test':'測試',
  'user':'會員中心',
  'account':'會員資料',
  'order-query':'訂單查詢',
  'favorite-products':'收藏商品',
  'favorite-articles':'收藏文章',
  'coupons':'專屬優惠券',
  'customized-products':'客製化商品',
  'size':'尺寸',
  'deco':'裝飾',
  'cart':'購物車',
  'order':'訂單',
  'blog':'部落格',
  'course':'課程',
  'update-password':'修改密碼',
  'publish':'發佈文章',
}
/* eslint-enable */
