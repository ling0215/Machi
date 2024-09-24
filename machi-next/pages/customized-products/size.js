import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakeSize from '@/components/customize/cake-size'
import { useCustomize } from '@/hooks/use-customize'
import toast, { Toaster } from 'react-hot-toast'

export default function CustomizedSize() {
  const { setSizePrice } = useCustomize()

  const notify = (size, price) =>
    toast.success(`您已選擇 ${size} 蛋糕尺寸，價格為 ${price} `)

  const handleSizePriceChange = (size, price) => {
    setSizePrice(size, price)
  }
  // 使用 handleSizePriceChange 來設定 size 和 price

  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps
            // bgStyle={styles['bg-yellow']}
            // textStyle={styles['custom-text-border-yellow']}
            active={true}
            stepNumber="1"
            stepText="選擇蛋糕尺寸"
          />
          <Steps stepNumber="2" stepText="選擇蛋糕口味及樣式" />
          <Steps stepNumber="3" stepText="加入購物車" />
        </div>
        <StepTitle
          title="Step 1 : 選擇蛋糕尺寸"
          shouldHide1
          prvLink="/customized-products/index"
          nextLink="/customized-products/deco"
        />
        <div className="lynn-choose-size">
          <div className="lynn-cake4">
            <CakeSize
              imageSize={100}
              size="4吋"
              price="420元"
              onClick={() => {
                handleSizePriceChange('4吋', parseInt('420元'))
                notify('4吋', '420元')
              }}
            />
          </div>
          <div className="lynn-cake6">
            <CakeSize
              imageSize={140}
              size="6吋"
              price="650元"
              onClick={() => {
                handleSizePriceChange('6吋', parseInt('650元'))
                notify('6吋', '650元')
              }}
            />
          </div>
          <div className="lynn-cake9">
            <CakeSize
              imageSize={160}
              size="9吋"
              price="1,080元"
              onClick={() => {
                handleSizePriceChange(
                  '9吋',
                  parseInt('1,080元'.replace(/,/g, ''))
                )
                notify('9吋', '1,080元')
              }}
            />
          </div>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#f8dc9a',
              color: '#363636',
            },
          }}
        />
      </div>
    </>
  )
}
