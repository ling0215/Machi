import axiosInstance, { fetcher } from './axios-instance'
import useSWR from 'swr'

export const updateCustomizePicture = async (formData) => {
  return await axiosInstance.post(`/customize/upload-customize`, formData)
}
