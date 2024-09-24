import axiosInstance from './axios-instance'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { useState } from 'react'
import { max, min } from 'lodash'




/**
 * 載入商品的資料，一般的axios使用get方式
 */
export const getProducts = async (
  sort = 'date',
  order = 'desc',
  search = '',
  category = '',
  page = 1,
  perpage = 16,
  priceRange = 3000
) => {
  return await axiosInstance.get(
    `/products?page=${page}&perpage=${perpage}&sort=${sort}&order=${order}&min=0&max=${priceRange}&search=${encodeURIComponent(
      search
    )}&category=${encodeURIComponent(category)}`
  )
}

export const fetchRawProduct = async (pid = 0) => {
  try {
    const response = await axiosInstance.get(`/products/${pid}`)
    if (response.status === 200) {
      return response.data
    } else {
      console.error('Failed to fetch article:', response.statusText)
      return []
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return []
  }
}

export const fetchProducts = (url) =>
  axiosInstance.get(url).then((res) => {
    // console.log(res.data)
    if (res.data.status === 'success') {
      const { total, pageCount, products } = res.data.data
      return {
        total,
        pageCount,
        products,
      }
    }

    return { total: 0, pageCount: 0, products: [] }
  })

export const fetchRawProducts = (url) => {
  console.log(url)

  return axiosInstance.get(url).then((res) => {
    // console.log(res.data)
    if (res.data.status === 'success') {
      const { products } = res.data.data
      return products
    }

    return []
  })
}

export const useProduct = (searchCriteria = {}, pageNow = 1, perpage = 10) => {
  const searchParams = new URLSearchParams(searchCriteria)

  const { data, error, isLoading } = useSWR(
    `/products?&page=${pageNow}&perpage=${perpage}&${searchParams.toString()}`,
    fetchProducts
  )

  return {
    products: data?.products,
    pageCount: data?.pageCount,
    total: data?.total,
    error,
    isLoading,
  }
}
