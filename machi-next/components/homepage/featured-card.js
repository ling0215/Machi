// import React from 'react';
// import Link from 'next/link';

// // 產品卡片組件
// function FeaturedCard({ product }) {
//   return (
//     <div className="col-md-3 d-flex justify-content-center mb-4">
//       <div className="w-350 no-border f-16 featured-card">
//         <Link href={`/product/detail/${product.id}`} passHref>
//           <a className="no-underline">
//             <img
//               src={product.product_image}
//               className="card-img-top"
//               alt={product.product_name}
//             />
//             <div className="card-body no-space-x">
//               <p className="card-text note-text mt-1">{product.product_status}</p>
//               <h5 className="card-text fw-bold card-title">
//                 {product.product_name}
//               </h5>
//               <p className="card-text type-text mb-2">{product.product_category}</p>
//               <p className="h-currency bold h-now">
//                 NT${product.product_price} &nbsp;
//                 {product.product_originalPrice && (
//                   <span className="text-decoration-line-through type-text">
//                     NT${product.product_originalPrice}
//                   </span>
//                 )}
//               </p>
//             </div>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default FeaturedCard;
