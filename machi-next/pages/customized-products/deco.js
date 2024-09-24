import Steps from '@/components/customize/steps'
import StepTitle from '@/components/customize/step-titles'
import CakePreview from '@/components/customize/cake-preview'
import CakeSize from '@/components/customize/cake-size'
import DecoSelector from '@/components/customize/deco-selector'
import Link from 'next/link'
import { useCustomize } from '@/hooks/use-customize'
import { useState } from 'react'
import { set } from 'lodash'

export default function CustomizedDeco() {
  const { customize, setLayer, setFlavor, setDeco, setSizePrice, setPreview } =
    useCustomize()

  const [basePrice, setBasePrice] = useState(customize.sizePrice.price)
  const [totalPrice, setTotalPrice] = useState(customize.sizePrice.price)
  const [decoAdded, setDecoAdded] = useState(false) // Add this line

  let size = customize.sizePrice.size
  let price = customize.sizePrice.price

  const handleDefaultSize = () => {
    setSizePrice('', '')
    setLayer('')
    setFlavor('')
    // setDeco([])
    setDeco('')
    setPreview('')
  }

  const handleLayerChange = (layer) => {
    setLayer(layer)
    let size = customize.sizePrice.size
    let price = basePrice

    if (layer === '3層') {
      // 如果層數是 "3層"，則價格為基礎價格
      price = basePrice
    } else if (layer === '4層') {
      // 如果層數是 "4層"，則價格為基礎價格加 50
      price = basePrice + 50
    }

    //加上已選擇的裝飾的價格
    // price += customize.deco.length * 20
    if (decoAdded) {
      price += 20
    }

    setSizePrice(size, price)
    setTotalPrice(price)
  }

  const handleFlavorChange = (flavor) => {
    setFlavor(flavor)
  }

  // const handleDecoChange = (newDeco) => {
  //   const prevDeco = customize.deco
  //   let nextDeco = [...prevDeco]
  //   let size = customize.sizePrice.size
  //   let price = totalPrice // 使用 totalPrice 而不是 basePrice

  //   if (prevDeco.includes(newDeco)) {
  //     // 如果 newDeco 已經在 prevDeco 中，則移除它
  //     nextDeco = prevDeco.filter((deco) => deco !== newDeco)
  //     price -= 20
  //   } else {
  //     // 如果 newDeco 不在 prevDeco 中，則添加它
  //     nextDeco = [...prevDeco, newDeco]
  //     price += 20
  //   }
  // setDeco(nextDeco)
  // setSizePrice(size, price)
  // setTotalPrice(price) // 更新 totalPrice 狀態
  // }

  const handleDecoChange = (deco) => {
    setDeco(deco)

    // 只有當還沒有增加裝飾品時，才增加價格
    if (!decoAdded) {
      price += 20 // 加上裝飾品的價格
      setTotalPrice(price)
      setDecoAdded(true) // 更新已經增加裝飾品的狀態
    }

    setSizePrice(size, price)
  }

  const handleDefaultDeco = () => {
    // setDeco([])
    setDeco('')
    setSizePrice(size, basePrice)
    setLayer('')
    setFlavor('')
    setPreview('')
    setDecoAdded(false)

    let ele = document.getElementsByName('layer')
    for (let i = 0; i < ele.length; i++) {
      ele[i].checked = false
    }

    let ele2 = document.getElementsByName('flavor')
    for (let i = 0; i < ele2.length; i++) {
      ele2[i].checked = false
    }
    let ele3 = document.getElementsByName('decos')
    for (let i = 0; i < ele3.length; i++) {
      ele3[i].checked = false
    }
    let ele4 = document.getElementsByName('photo')
    for (let i = 0; i < ele4.length; i++) {
      ele4[i].checked = false
    }

    document.getElementById('formFileSm').value = ''
  }

  return (
    <>
      <div>
        <div className="lynn-custom-row">
          <Steps stepNumber="1" stepText="選擇蛋糕尺寸" />
          <Steps
            // bgStyle={styles['bg-yellow']}
            // textStyle={styles['custom-text-border-yellow']}
            active={true}
            stepNumber="2"
            stepText="選擇蛋糕口味及樣式"
          />
          <Steps stepNumber="3" stepText="加入購物車" />
        </div>
        <div className="lynn-step-title">
          <StepTitle
            title="Step 2 : 選擇蛋糕口味及樣式"
            prvLink="/customized-products/size"
            nextLink="/customized-products/cart"
            onTitleClick={handleDefaultSize}
          />
        </div>
        <div className="lynn-deco-preview">
          <div className="lynn-preview-section">
            <CakePreview size={customize.sizePrice.size} />
            <div className="lynn-preview-cake">
              <CakeSize imageSize={170} size="預覽示意圖" price=" " />
            </div>
          </div>
          <div className="lynn-deco-selection">
            <DecoSelector
              decoTitle="請選擇蛋糕體層數"
              decoSubtitle="*3層為基本，每加一層 + NT$50"
              options={[
                {
                  name: 'layer',
                  value: 'layer3',
                  label: '3層',
                  onClick: () => handleLayerChange('3層'),
                },
                {
                  name: 'layer',
                  value: 'layer4',
                  label: '4層',
                  onClick: () => handleLayerChange('4層'),
                },
              ]}
              displayType="radio"
            />
            <DecoSelector
              decoTitle="請選擇蛋糕口味"
              decoSubtitle=""
              options={[
                {
                  name: 'flavor',
                  value: 'earl-grey',
                  label: '伯爵',
                  onClick: () => handleFlavorChange('伯爵'),
                },
                {
                  name: 'flavor',
                  value: 'matcha',
                  label: '抹茶',
                  onClick: () => handleFlavorChange('抹茶'),
                },
                {
                  name: 'flavor',
                  value: 'choco',
                  label: '巧克力',
                  onClick: () => handleFlavorChange('巧克力'),
                },
              ]}
              displayType="radio"
            />
            {/* <div className="lynn-deco-checkbox">
              <DecoSelector
                decoTitle="請選擇蛋糕表面裝飾"
                decoSubtitle="*每加一項裝飾 + NT$20"
                options={[
                  {
                    name: 'decos',
                    value: 'berries',
                    label: '綜合莓果',
                    onClick: () => handleDecoChange('綜合莓果'),
                  },
                  {
                    name: 'decos',
                    value: 'orangeCoffee',
                    label: '橙片咖啡',
                    onClick: () => handleDecoChange('橙片咖啡'),
                  },
                  // {
                  //   name: 'decos',
                  //   value: 'chocolate',
                  //   label: '巧克力',
                  //   onClick: () => handleDecoChange('巧克力'),
                  // },
                  // {
                  //   name: 'decos',
                  //   value: 'macaron',
                  //   label: '馬卡龍',
                  //   onClick: () => handleDecoChange('馬卡龍'),
                  // },
                  // {
                  //   name: 'decos',
                  //   value: 'orange',
                  //   label: '蜜漬橙片',
                  //   onClick: () => handleDecoChange('蜜漬橙片'),
                  // },
                  // {
                  //   name: 'decos',
                  //   value: 'blueberry',
                  //   label: '藍莓',
                  //   onClick: () => handleDecoChange('藍莓'),
                  // },
                  {
                    name: 'decos',
                    value: 'photo',
                    label: '其他：上傳圖片',
                    onClick: () => handleDecoChange('其他：上傳圖片'),
                  },
                ]}
                displayType="checkbox"
              />
            </div> */}
            <DecoSelector
              decoTitle="請選擇蛋糕表面裝飾"
              decoSubtitle="*加裝飾 + NT$20"
              options={[
                {
                  name: 'decos',
                  value: 'berries',
                  label: '綜合莓果',
                  onClick: () => handleDecoChange('綜合莓果'),
                },
                {
                  name: 'decos',
                  value: 'orangeCoffee',
                  label: '橙片咖啡',
                  onClick: () => handleDecoChange('橙片咖啡'),
                },
              ]}
              displayType="radio"
            />
            <DecoSelector
              decoTitle="請上傳客製化圖片"
              decoSubtitle="*建議將圖片裁切成正方形，並上傳高解析度圖片"
              options={[
                {
                  name: 'photo',
                  value: 'photo',
                  label: '上傳圖片',
                  onClick: () => {},
                },
              ]}
              displayType="radio"
            />
            <hr className="lynn-done-select" />
            <div className="lynn-deco-price">
              <span>小計：</span>
              <span>{`NT$${customize.sizePrice.price}`}</span>
            </div>
            <div className="lynn-deco-confirm">
              {/* <Link href="/customized-products/deco" passHref> */}
              <button className="lynn-btn-grey" onClick={handleDefaultDeco}>
                清除重填
              </button>
              {/* </Link> */}
              <Link href="/customized-products/cart" passHref>
                <button className="lynn-btn-brown">確定</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
