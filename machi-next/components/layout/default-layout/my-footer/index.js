import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import TopButton from './top-btn'
// ICON
import { FaInstagram } from 'react-icons/fa6'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaLine, FaAngleUp } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineAccessTime } from 'react-icons/md'
import { logout } from '@/services/user'

export default function MyFooter() {
  return (
    <>
      <footer className={`${styles.machi_footer} footer mt-auto py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none mt-3`}
              >
                會員專區
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                我的帳戶
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                訂單查詢
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                收藏清單
              </Link>
            </div>
            <div className="col-12 col-md">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none mt-3`}
              >
                客戶服務
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                宅配須知
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                退款政策
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                服務條款
              </Link>
            </div>
            <div className="col-12 col-md">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none mt-3`}
              >
                關於我們
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <FiMapPin size={20} />
                &nbsp; 320桃園市中壢區新生路421號
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <MdOutlineMail size={20} />
                &nbsp; machi@gmail.com
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <FiPhone size={20} />
                &nbsp; (03)452-1234
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
                onClick={logout}
              >
                <MdOutlineAccessTime size={20} />
                &nbsp; 12:00-20:00
              </Link>
            </div>
            <div className="col-12 col-md">
              <div className="mt-4" />
              <div className={`${styles['logo-machi']} mb-3  mx-auto`}>
                {/* LOGO */}
                <Image
                  src="/logo-machi-white.svg"
                  alt=""
                  width={145}
                  height={50}
                  priority
                />
              </div>
              <div className="d-flex justify-content-center">
                {/* 三個小圖標 */}
                <FaInstagram color="white" size={36} />

                <FaSquareFacebook color="white" size={36} className="mx-3" />

                <FaLine color="white" size={36} />
              </div>
            </div>
          </div>
          <TopButton />
          <div className="text-white text-center mt-4">
            machi © All rights reserved.{' '}
          </div>
        </div>
      </footer>
    </>
  )
}
