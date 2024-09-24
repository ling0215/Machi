import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchBetterArticlesHomepage } from '@/services/homepage'
import Image from 'next/image'

const CardBlog = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBetterArticlesHomepage()
      setArticles(response.data.data.articles)
    }

    fetchData()
  }, [])

  const stripHtmlTagsAndEntities = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }

  return (
    <>
      {articles.map((article, index) => (
        <div
          key={index}
          className="row row-cols-1 row-cols-md-2 d-flex py-4 align-items-center article-card"
        >
          <div className="col-md-6 d-flex justify-content-center">
            <Link
              href={`/blog/${article.article_id}`}
              passHref
              className="no-underline d-flex align-items-center"
            >
              <img
                loading="lazy"
                src={article.firstImageUrl || '/images/blog/article2.jpg'}
                className="img-fluid"
                alt="文章圖片"
              />
            </Link>
          </div>
          <div className="col-md-6 article-right">
            <div className="mt-2 mb-2 d-flex article-title">
              {article.article_title}
            </div>
            <br />
            { }
            <div className="d-flex mb-3 article-date">
              {new Date(article.article_createtime)
                .toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })
                .replace(/\//g, '.')}
            </div>
            <Link href={`/blog/${article.article_id}`}>
              <button className="btn btn-grey read-more btn-sm">
                閱讀更多
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardBlog
