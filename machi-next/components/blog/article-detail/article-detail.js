import { useEffect, useState } from 'react'
import { fetchRawArticle } from '@/services/blog'
import styles from '@/components/blog/article-detail/article-detail.module.scss'
import DOMPurify from 'dompurify'
import Link from 'next/link'

const ArticleDetail = ({ articleId }) => {
  const [article, setArticle] = useState(null)
  useEffect(() => {
    const getArticleData = async () => {
      try {
        const articleData = await fetchRawArticle(`${articleId}`)
        // console.log('Article Data:', articleData)
        if (articleData) {
          setArticle(articleData)
        } else {
          console.error('Failed to fetch article data')
        }
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }
    // console.log(articleId)

    getArticleData()
  }, [articleId])

  if (!article) {
    return <p>Loading...</p>
  }

  const cleanHTML = DOMPurify.sanitize(article.article_content)
  const categories = article.article_category
    ? article.article_category.split(',')
    : []
  // console.log(categories)
  return (
    <div className={`container ${styles['article-text']}`}>
      <div className={styles['article-user']}>
        <img
          src={`http://localhost:3005/avatar/${article?.user?.user_id}.jpg`}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'http://localhost:3005/avatar/0.jpg'
          }}
          alt=""
        />
        {article?.user?.user_account}{' '}
      </div>
      <div className={styles['article-btn']}>
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
      <div className={styles['article-title']}>
        <h3>{article.article_title}</h3>
        {article.article_createtime
          ? article.article_createtime.split('T')[0]
          : ''}
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      </div>
      <div>
        <Link
          href="/blog"
          className="btn btn-primary btn-sm ms-2"
          style={{ backgroundColor: '#ab927d', border: 'none' }}
        >
          回文章列表
        </Link>
      </div>
    </div>
  )
}

export default ArticleDetail

export async function getServerSideProps(context) {
  const { params } = context
  const articleId = params.id // 假設你的路由是 /articles/[id]

  return {
    props: {
      articleId,
    },
  }
}
