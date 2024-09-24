import { createContext, useState, useContext } from 'react'
import { updateCustomizePicture } from '@/services/customize'

const CustomizeContext = createContext(null)

export function CustomizeProvider({ children }) {
  const [pictureUrl, setPictureUrl] = useState(null)
  const updatePictureUrl = (url) => {
    setPictureUrl(url)
  }

  const [customize, setCustomize] = useState({
    sizePrice: { size: '', price: '' },
    layer: '',
    flavor: '',
    deco: '',
    preview: '', // 預覽示意圖
  })

  const setDefaultCustomize = () => {
    setCustomize({
      sizePrice: { size: '', price: '' },
      layer: '',
      flavor: '',
      deco: '',
      preview: '', // 預覽示意圖
    })
  }

  const setSizePrice = (size, price) => {
    setCustomize((prevState) => ({ ...prevState, sizePrice: { size, price } }))
  }

  const setLayer = (layer) => {
    setCustomize((prevState) => ({ ...prevState, layer }))
  }

  const setFlavor = (flavor) => {
    setCustomize((prevState) => ({ ...prevState, flavor }))
  }

  const setDeco = (deco) => {
    setCustomize((prevState) => ({ ...prevState, deco }))
  }

  const setPreview = (preview) => {
    setCustomize((prevState) => ({ ...prevState, preview }))
  }

  return (
    <CustomizeContext.Provider
      value={{
        customize,
        setDefaultCustomize,
        setSizePrice,
        setLayer,
        setFlavor,
        setDeco,
        setPreview,
        pictureUrl, // 新的狀態
        updatePictureUrl, // 新的函數
      }}
    >
      {children}
    </CustomizeContext.Provider>
  )
}

export const useCustomize = () => useContext(CustomizeContext)
