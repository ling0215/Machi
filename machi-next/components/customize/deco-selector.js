import { useState, useEffect } from 'react'
import styles from './customize.module.css'
import { useCustomize } from '@/hooks/use-customize'
import { updateCustomizePicture } from '@/services/customize'


export default function DecoSelector({
  decoTitle,
  decoSubtitle,
  options,
  displayType,
  onClick,
  onFileChange,
}) {
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const { customize, setPreview, updatePictureUrl } = useCustomize()

  const handleClick = (event) => {
    onClick(event.target.value)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('customize', file)
    updateCustomizePicture(formData)
      .then((response) => {
        // console.log(response.data.data.picture)
        updatePictureUrl(response.data.data.picture)
      })
      .catch((error) => {
        console.error(error)
      })

    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)
      setPreview('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setPreview('')
    }
  }

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  return (
    <div className={styles['deco-overview']}>
      <div className={styles['deco-titles']}>
        <p>{decoTitle}</p>
        <p>{decoSubtitle}</p>
      </div>
      <hr className={styles['hr-brown']} />
      <div className={styles['deco-options']}>
        <div className={styles['deco-options']}>
          {options.map((option) => (
            <div className={styles['deco-select']} key={option.value}>
              <label htmlFor={option.value}>
                <input
                  onChange={() => option.onClick(option.label)}
                  type={displayType}
                  id={option.value}
                  name={option.name}
                  value={option.label}
                />
                <span className={styles['label-text']}>{option.label}</span>
              </label>
              {option.value === 'photo' ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <input
                    className="form-control form-control-sm ms-2"
                    id="formFileSm"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
