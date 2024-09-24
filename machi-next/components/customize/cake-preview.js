import React, { useContext } from 'react'
import styles from './customize.module.css'
import Image from 'next/image'
import { useCustomize } from '@/hooks/use-customize'

export default function CakePreview({ size }) {
  const { customize } = useCustomize()
  return (
    <>
      <div className={styles['preview-overview']}>
        <div className={styles['preview-size']}>{customize.sizePrice.size}</div>
        <div className={styles['preview-photo-overview']}>
          <div className={styles['preview-photo']}>
            {customize.preview ? <img src={customize.preview} /> : ''}
          </div>
          <div className={styles['preview-photo-text']}>(照片預覽圖)</div>
        </div>
        <div className={styles['preview-arrow']}>
          <Image
            src="/images/customize/cake_arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
        {/* <div>
          <Image
            src="/images/customize/cake4.png"
            alt="蛋糕"
            width={170}
            height={170}
          />
          <p className={styles['preview-cake']}>預覽示意圖</p>
        </div> */}
      </div>
    </>
  )
}
