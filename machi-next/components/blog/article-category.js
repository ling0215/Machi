import React from 'react'
import styles from '@/components/blog/article-category.module.scss'

export default function ArticleCategory({ handleCategoryClick }) {
  const categories = ['蛋糕', '泡芙', '塔派', '餅乾', '點心', '馬卡龍', '教學']


  //   return (
  //     <>
  //       <div className="article-category py-2">
  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">蛋糕</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">泡芙</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">餅乾</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">教學</span>
  //         </div>
  //       </div>

  //     </>
  //   )
  // }
  return (
    <>

<div className={`py-2 ${styles['article-category']} ${styles['article-category-pc']}`}>        
{categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              onClick={() => handleCategoryClick(category)}
            />
            <span className="mx-3">{category}</span>
          </div>
        ))}
      </div>
      {/* 手機板 */}
      <div className={`py-2 ${styles['article-category']} ${styles['article-category-mobile']}`}>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              onClick={() => handleCategoryClick(category)}
            />
            <span className="mx-3">{category}</span>
          </div>
        ))}
      </div>
    </>
  )
}

