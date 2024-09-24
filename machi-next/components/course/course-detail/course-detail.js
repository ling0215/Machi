import styles from './course-detail.module.scss'
import React, { useState } from 'react'

function CourseDetail() {
  const [activeButton, setActiveButton] = useState('intro')

  const handleButtonClick = (eventKey) => {
    setActiveButton(eventKey)
  }
  return (
    <>
      <div className="label">
        <button
          onClick={() => handleButtonClick('intro')}
          className={`${styles.intro} ${
            activeButton === 'intro' ? styles.buttonActive : ''
          }`}
          title="商品介紹"
        >
          商品介紹
        </button>
        <button
          onClick={() => handleButtonClick('other')}
          className={`${styles.other} ${
            activeButton === 'other' ? styles.buttonActive : ''
          }`}
          title="運送與注意事項"
        >
          運送與注意事項
        </button>
      </div>
      <div
        className="content"
        style={{ display: activeButton === 'intro' ? 'block' : 'none' }}
      >
        <div className="list-group-flush p-2 py-3 mb-4 border">
          <h4 id="title">商品介紹內文</h4>
        </div>
      </div>
      <div
        className="content"
        style={{ display: activeButton === 'other' ? 'block' : 'none' }}
      >
        <div className="list-group-flush p-2 py-3 mb-4 border">
          <h4 id="title">｜產品尺寸｜</h4>
          <p className="list-group-item">
            &nbsp;6吋 - 13cm(Φ)x7cm(h)
            <br /> &nbsp;9吋 (產品以手工製作，尺寸僅供參考，略有誤差屬正常現象)
          </p>
          <h4 id="title">｜保存與享用｜</h4>
          <p className="list-group-item">
            為確保品質，將以低溫宅配運送，收到產品後，可選擇冷藏或冷凍擇一方式保存
          </p>
          <p className="list-group-item">◼︎ 冷藏 |  3天內為最佳賞味期間</p>
          <p className="list-group-item">
            ◼︎ 冷凍 |  2週內，請密封保存避免冰箱異味影響風味
          </p>
          <h4 id="title">｜運送與注意事項｜</h4>
          <p className="list-group-item">
            ◼︎
            為確保商品新鮮及配送安全，宅配產品全程將使用低溫冷凍配送，部分商品因損壞風險較大，恕無法宅配。
          </p>
          <p className="list-group-item">
            ◼︎ 自取時間為營業日的PM14:00-20:00。
          </p>
          <p className="list-group-item">
            ◼︎ 宅配金額$190-$240、桃園以外線市快遞金額，將依照您的里程數計算
          </p>
          <p className="list-group-item">
            ◼︎ 訂單送出後，請在24小時內完成付款，付款完成才開始安排訂單製作唷
          </p>
          <p className="list-group-item">
            ◼︎ 商品皆為新鮮製作，因此最快出貨日為下單後3個工作天
          </p>
          <p className="list-group-item">
            ◼︎ 急單請電洽，聯繫電話
            (03)452-1234，夥伴們將跟您確認收貨日期相關事宜
          </p>
          <h4 id="title">｜宅 配 延 遲｜</h4>
          <p className="list-group-item">
            因疫情升級造成物流繁忙，恕無法於指定日期配送到貨，在商品送達前，敬請多留意黑貓宅配之聯繫電話，也建議您提前預留到貨時間，以確保趕得上您的時程安排。此段期間，商品若有延誤，恕不接受退換貨申請，敬請見諒。若有急單或需於指定日期送達，建議您多加利用快遞服務或前往店面自取。
          </p>
          <h4 id="title">｜風 險 說 明｜</h4>
          <p className="list-group-item">
            宅配商品皆進行多次配送實驗，並給予最完善的包裝，配送過程仍有一定的風險，如遇蛋糕位移、側邊損傷或裝飾掉落、微損，或因宅配繁盛期延遲到貨與毀損，均不在毀壞補償範圍內，風險須自行承擔
          </p>
        </div>
      </div>
    </>
  )
}

export default CourseDetail
