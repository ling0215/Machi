import React from 'react';
import Link from 'next/link';
import styles from '../member.module.scss';

function LoginNavBar() {
  return (
    <nav className="d-none d-md-block">
      <ul className="d-flex flex-column flex-md-row justify-content-center list-inline content-nav">
        <li className="active">
          <Link href="/member/login" className={`${styles['content-nav']} p-2 px-4 mx-2 text-decoration-none`}>
            會員登入
          </Link>
        </li>
        <li>
          <Link href="/member/register" className={`${styles['content-nav']} p-2 px-4 mx-2 text-decoration-none`}>
            會員註冊
          </Link>
        </li>
        <li>
          <Link href="/member/forget-password" className={`${styles['content-nav']} p-2 px-4 mx-2 text-decoration-none`}>
            忘記密碼
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNavBar;