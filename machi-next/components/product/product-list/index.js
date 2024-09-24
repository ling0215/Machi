import React from 'react';
import GridProductCard from './grid-product-card';
import ListProductCard from './list-product-card';
import { Toaster } from 'react-hot-toast'

export default function ProductList({ products, view }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map(product => (
        view === 'grid' ? (
          <GridProductCard key={product.id} product={product} name={product.name} />
        ) : (
          <ListProductCard key={product.id} product={product} />
        )
      ))}
      <Toaster  />
    </div>
  );
}