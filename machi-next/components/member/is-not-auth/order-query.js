import React, { useState } from 'react'
import styles from '../member.module.scss'
import Link from 'next/link'
import { requestOtpToken } from '@/services/user'
import { OrderQuery } from '@/services/user'

function OrderQuery() {

  return (
    <main className={`form-member w-100 m-auto text-center`}>
      <div className="card mt-5 border-0 shadow">
        <div className="card-body">
          <h5 className="text-center fw-bold mx-5 mt-3 mb-4 text-brown border-bottom">
            訂單編號
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 ${styles['form-control']} `}
                  placeholder="請輸入訂單編號"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="請輸入電子郵件"
                  value={password}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className=" text-white btn btn-brown w-100">
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default OrderQuery;
