import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import styles from './customize.module.css'

export default function Comment({ comment, name }) {
  // const commentData = {
  //   // customerImage:
  //   //   'https://cdn.builder.io/api/v1/image/assets/TEMP/c21ae4ff45bedf2001bd80ddb8e51d9a915a184056e415b6e80ae0f08bf51b15?apiKey=561d4b94b26f4d038679b81a14a4536c&',
  //   name: 'Iris Lin',
  //   customerTitle: 'Our Customer',
  //   text: 'text',
  //   testimonialText: '蛋糕口感清爽不甜膩，家人很滿意。會再推薦給朋友！',
  // }

  return (
    <>
      <div className={styles.testimonialCard}>
        <img
          src="../../images/customize/double_comma.svg"
          alt=""
          className={styles.quoteIcon}
        />
        <p className={styles.testimonialText}>{comment}</p>
        <hr className={styles.hr} />
        <div className={styles.customerInfo}>
          <FaRegUser className={styles.userIcon} />
          <div className={styles.customerDetails}>{name}</div>
        </div>
      </div>
    </>
  )
}
