import React, { useState, useEffect } from 'react'
import './App.css'
// 改為資料夾方式中的index.js
import FilterBar from './components/FilterBar/'
import ProductList from './components/ProductList/'
import SearchBar from './components/SearchBar/'
import SortBar from './components/SortBar/'

import { data } from './data/'

function App() {
  // 產品用的資料
  // 1. 從伺服器來的原始資料
  const [products, setProducts] = useState([])
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([])

  // 下面四個狀態是對應到四種不同的表單元素
  const [tags, setTags] = useState([])
  const tagTypes = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']

  // radio
  const [priceRange, setPriceRange] = useState('所有')
  const priceRangeTypes = ['所有', '1萬以下', '1~2萬']

  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  // 載入指示的spinner動畫用的
  const [isLoading, setIsLoading] = useState(false)

  //x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  // 初始化資料-didMount
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  // 四個表單元素的處理方法
  const handleSearch = (products, searchWord) => {
    let newProducts = [...products]

    if (searchWord.length) {
      newProducts = products.filter((product) => {
        // includes -> String API
        return product.name.includes(searchWord)
      })
    } 

    return newProducts
  }

  const handleSort = (products, sortBy) => {
    let newProducts = [...products]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price)
    }

    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id)
    }

    return newProducts
  }

  const handleTags = (products, tags) => {
    let newProducts = [...products]

    // tags = 代表使用者目前勾選的標籤陣列
    //console.log(tags)

    // 處理勾選標記
    if (tags.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false

        // 原本資料裡的tags字串轉為陣列
        const productTags = product.tags.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          // includes -> Array api
          if (productTags.includes(tags[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newProducts
  }

  const handlePriceRange = (products, priceRange) => {
    let newProducts = [...products]

    // 處理價格區間選項
    switch (priceRange) {
      case '1萬以下':
        newProducts = products.filter((p) => {
          return p.price <= 10000
        })
        break
      case '1~2萬':
        newProducts = products.filter((p) => {
          return p.price >= 10000 && p.price <= 20000
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newProducts
  }

  // 當四個過濾表單元素有更動時
  // componentDidUpdate + didMount
  // ps. 一開始也會載入
  useEffect(() => {
    
    // 搜尋字串太少不需要搜尋
    if (searchWord.length < 3 && searchWord.length !== 0)
    return 
    
    // 先開起載入指示器
    setIsLoading(true)

    let newProducts = []

    // 處理搜尋
    newProducts = handleSearch(products, searchWord)

    // 處理排序
    newProducts = handleSort(newProducts, sortBy)

    // 處理勾選標記
    newProducts = handleTags(newProducts, tags)

    // 處理價格區間選項
    newProducts = handlePriceRange(newProducts, priceRange)

    setDisplayProducts(newProducts)

  }, [searchWord, products, sortBy, tags, priceRange])

  // bootstrap 的spinner
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 真正要呈現的資料
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar
                      priceRangeTypes={priceRangeTypes}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      tagTypes={tagTypes}
                      tags={tags}
                      setTags={setTags}
                    />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />
                    {isLoading ? (
                      spinner
                    ) : (
                      <ProductList products={displayProducts} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
