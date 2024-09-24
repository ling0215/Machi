import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/components/blog/article-list.module.scss'
import Image from 'next/image'
import { checkAuth } from '@/services/user'
import Swal from 'sweetalert2'


import { FaCaretRight } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import { FaPenToSquare } from 'react-icons/fa6'

const ArticlesList = ({ articles }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  // ...

  const handleAddArticleClick = async (event) => {
    event.preventDefault()
    try {
      const response = await checkAuth()
      if (response.data.data.user) {
        // 用戶已經登入，導航到發布文章的頁面
        router.push('/blog/publish')
      } else {
        // 用戶未登入，顯示提示訊息
        Swal.fire({
          icon: 'warning',
          title: '請先登入',
          confirmButtonText: '確定',
        })
      }
    } catch (error) {
      // 處理錯誤
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: '請先登入',
        confirmButtonText: '確定',
      })
    }
  }

  // console.log(category)
  useEffect(() => {
    setIsOpen(false)
  }, [])
  const stripHtmlTagsAndEntities = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }

  return (
    <>
      <div className={`${styles['list-h']} ${styles['article-list-pc']}`}>        <div className={styles[`menu`]}>
        <button
          className={`btn`}
          id="listview"
          onClick={() => {
            setIsOpen((prevIsOpen) => {
              return !prevIsOpen
            })
          }}
        >
          <i className="bi bi-list"></i>
        </button>
        <div className={styles[`dropdown-position`]}>
          {isOpen && (
            <div className={styles[`dropdown-menu`]}>
              <Link
                href={`/blog/publish`}
                type="button"
                className={styles[`link-style`]}
                onClick={handleAddArticleClick}
              >
                <li onClick={() => console.log('選項2被點擊')}>
                  新增文章
                  <MdAdd />
                </li>
              </Link>{' '}
            </div>
          )}
        </div>
      </div>
        {articles.map((article) => (
          <li key={article.article_id}>
            <div className="list-array">
              <div className="article-content">
                <div>
                  <Image
                    src={article.firstImageUrl || '/images/blog/article2.jpg'}
                    alt=""
                    width={500}
                    height={300}
                    priority
                  />
                </div>
                <div className="mx-4 article-text">
                  <ul className="article-list acticle-tag">
                    {article.article_category?.split(',').map((category) => (
                      <li key={category} className="p-1 me-2">
                        {category}
                      </li>
                    ))}
                  </ul>
                  <h4 className="pt-2">{article.article_title}</h4>
                  <span>
                    {article.article_createtime
                      ? article.article_createtime.split('T')[0]
                      : ''}
                  </span>
                  <p>
                    {article.article_content
                      ? stripHtmlTagsAndEntities(article.article_content)
                      : ''}
                  </p>
                  <div className={styles[`more`]}>
                    <Link
                      href={`/blog/${article.article_id}`}
                      type="button"
                      className={styles[`link-style`]}
                    >
                      READ MORE
                      <FaCaretRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
      {/* 手機板 */}
      <div className={`${styles['list-h']} ${styles['article-list-mobile']}`}>
        <div className={styles[`menu`]}>
          <div className={styles[``]}>
            <div className={styles[``]}>
              <Link
                href={`/blog/publish`}
                type="button"
                className={`${styles['link-style']} ${styles['link-style-m']}`}              // onClick={handleAddArticleClick}
              >
                <li onClick={() => console.log('選項2被點擊')}>
                  新增文章
                  <MdAdd />
                </li>
              </Link>{' '}
            </div>

          </div>
        </div>
        {articles.map((article) => (
          <li key={article.article_id} className='article-color-m'>
            <div className="list-array ">
              <div className={styles[`image-m`]}>
                <Image
                  src={article.firstImageUrl || '/images/blog/article2.jpg'}
                  alt=""
                  width={315}
                  height={250}
                  priority
                />
              </div>
              <div className="article-content-m">
                <div className="mx-2 article-text-m">
                  <ul className="article-list acticle-tag-m">
                    {article.article_category?.split(',').map((category) => (
                      <li key={category} className="p-1 me-2">
                        {category}
                      </li>
                    ))}
                  </ul>
                  <h4 className="pt-2">{article.article_title}</h4>
                  <span>
                    {article.article_createtime
                      ? article.article_createtime.split('T')[0]
                      : ''}
                  </span>
                  <p>
                    {article.article_content
                      ? stripHtmlTagsAndEntities(article.article_content)
                      : ''}
                  </p>
                  <div className={styles[`more`]}>
                    <Link
                      href={`/blog/${article.article_id}`}
                      type="button"
                      className={styles[`link-style`]}
                    >
                      READ MORE
                      <FaCaretRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  )
}

export default ArticlesList
