import React from 'react'
import styles from './customize.module.css'

export default function Steps({
  // bgStyle, textStyle,
  active = false,
  stepNumber,
  stepText,
}) {
  // Steps.defaultProps = {
  //   bgStyle: styles['bg-grey'],
  //   textStyle: styles['custom-text-grey'],
  // }
  return (
    <div className={`${styles['custom-col']}`}>
      {/* <div className={`${styles['custom-circle']} ${bgStyle} ${textStyle}`}> */}
      <div
        className={`${styles['custom-circle']} ${
          active ? styles['bg-yellow'] : styles['bg-grey']
        } ${
          active
            ? styles['custom-text-border-yellow']
            : styles['custom-text-grey']
        }`}
      >
        <div className={styles['custom-text']}>{stepNumber}</div>
      </div>
      {/* <div className={textStyle}>{stepText}</div> */}
      <div
        className={`${
          active
            ? styles['custom-text-border-yellow']
            : styles['custom-text-grey']
        }`}
      >
        {stepText}
      </div>
    </div>
  )
}
