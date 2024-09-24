import React, { useState, useEffect } from 'react';
import ProductList from '@/components/product/product-list';
import SearchBar from '@/components/product/product-list/search-bar';
import Sidebar from '@/components/product/product-list/side-bar';
import Pagination from '@/components/product/product-list/pagination';
import { getProducts } from '@/services/product'; // 請根據實際路徑進行調整

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState(3000);
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  const [view, setView] = useState('grid'); // 預設為 'grid' 視圖
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getProducts(sort, order, search, category, page, 16, priceRange)
      .then((response) => {
        console.log(response.data); // 打印後端的回應
        return response.data;
      })
      .then((data) => {
        if (data && data.data && data.data.products && data.data.pageCount) {
          setProducts(data.data.products);
          setTotalPages(data.data.pageCount);
        } else {
          // 設置一個預設值或者顯示一個錯誤消息
          setProducts([]);
          setTotalPages(0);
          console.error('No data returned from the server.');
        }
      });
  }, [search, category, sort, order, page, priceRange]);

  return (
    <div>
      <SearchBar
        setSearch={setSearch}
        setSort={setSort}
        setOrder={setOrder}
        setView={setView} // 傳遞 setView
      />
      <div style={{ display: 'flex' }}>
        <Sidebar setCategory={setCategory} setPriceRange={setPriceRange} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ProductList products={products} view={view} /> {/* 傳遞 view */}
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
