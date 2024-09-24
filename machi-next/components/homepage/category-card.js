import React from 'react'
function CategoryCard({ category }) {
  return (
    <>
    <div className="py-5 category-card-bgc">
      <div className="container">
        <h2
          className="pb-2 text-center text-primary-dark"
            style={{ borderBottom: '1px solid #785e4c' }}>
          商品類別
        </h2>
        <div className="row row-cols-2 row-cols-md-5 pt-5 d-flex justify-content-center">
          {/* 重複的卡片部分簡化，因為四個卡片都相同 */}
          {Array.from({ length: category.length }).map((_, index) => (
            <div
              className="col d-flex justify-content-center px-0 py-0 category-card"
              key={category[index].category_id}
            >
              <div
                className="card card-cover w-75 h-100 overflow-hidden text-bg-light text-center rounded-4 shadow-lg"
                style={{
                  backgroundImage: "url('/images/features/category-img.jpg')",
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 justify-content-center text-white text-shadow-1">
                  <h4 className="display-6 lh-1 fw-bold">
                    {category[index].category_name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .category-card-bgc {
          background-color: var(--primary-1);
      }

      .category-card {
          margin-top: 0; 
          margin: 5px;
          height: 200px;
      }
    `}</style>
    </>
  )
}

export default CategoryCard
