import React, { useState, useEffect } from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'
import { postMessage } from '@/services/blog'
import { checkAuth } from '@/services/user'
import Swal from 'sweetalert2'
import { fetchComments } from '@/services/blog'

import { TiMessages } from 'react-icons/ti'
import { IoIosSend } from 'react-icons/io'

export default function ArticleMessageArea({ articleId }) {
  const [message, setMessage] = useState('')
  const [articleCommentId, setArticleCommentId] = useState('')
  const [articleIdFk, setArticleIdFk] = useState('')
  const [userIdFk, setUserIdFk] = useState('')
  const [articleCommentContent, setArticleCommentContent] = useState('')
  const [articleCommentCreateTime, setArticleCommentCreateTime] = useState('')

  const [comments, setComments] = useState([])
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyContent, setReplyContent] = useState('')

  const getComments = async () => {
    const data = await fetchComments(`${articleId}`)
    console.log('fetchComments returned:', data) // 添加這行調試代碼
    setComments(data)
    // console.log(articleId)
  }
  useEffect(() => {
    getComments()
  }, [articleId])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await checkAuth()
      if (response.data.data.user) {
        // console.log(response.data.data.user.user_id);
        const userId = response.data.data.user.user_id
        setUserIdFk(userId)
        console.log('user_id_fk:', userId)

        const currentTime = new Date().toLocaleString('zh-TW', { hour12: false }) // 使用當地時間作為留言的創建時間
        setArticleIdFk(articleId) // 假設文章的 ID 存儲在 articleId 變量中
        console.log(articleId)
        setArticleCommentContent(message)
        // 用戶已經登入，繼續提交留言
        // console.log(response.data.data.user);
        await postMessage({
          article_comment_id: articleCommentId,
          article_id_fk: articleId,
          user_id_fk: userId,
          article_comment_content: message,
          article_comment_createtime: currentTime,
        })
        // 清空留言輸入框
        setMessage('')
        setArticleCommentId('')
        setArticleIdFk('')
        setUserIdFk('')
        setArticleCommentContent('')
        setArticleCommentCreateTime('')
        getComments()
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


  return (
    <>
      {/* 未登入狀態
      <div className={`container`}>
        <div className={styles['message-area-n']}>
          <h4>留言區</h4>
        </div>
          <p>我要留言</p>
        <div className={styles['message-n']}>
          <p>請先登入後留言..</p>
          <button>登入</button>
        </div>
      </div> */}

      <div className={`container`}>
        <h4>留言區</h4>
        {comments.map((comment, index) => (
          <div key={index} className={styles['message-area']}>
            <div className={styles[`user-message`]}>
              <div className={styles[`user-name`]}>
                <div className={styles[`img-s`]}>
                <span className={styles[`floor`]}>{index + 1}F</span>                  
                <img src={`http://localhost:3005/avatar/${comment?.user?.user_id}.jpg`}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'http://localhost:3005/avatar/0.jpg'
                    }}
                    alt="" />
                  <span className={styles[`floor-name`]}>{comment.user.user_account}</span>
                </div>
                <div
                  className={styles[`create-time`]}>{comment.article_comment_createtime.split('T')[0]}
                </div>
              </div>
              <div className={styles['message-content']}>
                <p>{comment.article_comment_content}</p>
              </div>
              <div className={styles[`message-btn`]}>
                
              </div>
            </div>
          </div>
        ))}
        <p>我要留言</p>
        <div className={styles[`message-input`]}>
          <div className={styles['message']}>
            <textarea
            className={styles['myTextarea']}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="輸入留言..."
            />
          </div>
          <div className={styles[`btn-end`]}>
            <button onClick={handleSubmit}>
              送出留言
              <IoIosSend
                style={{
                  fontSize: '1rem',
                  marginLeft: '5px',
                  marginBottom: '4px',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
