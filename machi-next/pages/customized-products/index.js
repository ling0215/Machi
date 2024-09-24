import Image from 'next/image'
import Link from 'next/link'
import Comment from '@/components/customize/comment'
import CustomizeLayout from '@/components/layout/customize/customize-layout'
import { useCustomize } from '@/hooks/use-customize'

function Customize() {
  const { setDefaultCustomize } = useCustomize()
  return (
    <>
      <div>
        <Image
          className="lynn-hero"
          src="/images/customize/customized-hero.jpg"
          alt=""
          width={100}
          height={20}
        />
        <header className="lynn-title">
          <h6 className="text-center my-3">
            Design a Custom Cake <br />
            客製化蛋糕
          </h6>
          <hr className="my-4" />
          <p>
            在Machi，我們提供獨一無二的客製化點心饗宴，讓您的味蕾成為我們的主廚。從濃郁的巧克力餡料，到經典與時尚相遇的外觀設計，您可以隨心所欲地挑選您最喜愛的組合，創造屬於您的法式點心獨家品味。
          </p>
          <p>
            每一口點心都如同Machi的名字一樣，是精緻的藝術品，完美結合法國優雅與隨性。讓您的每次造訪都成為一場美味的冒險，就像漫遊在巴黎的小巷，處處都是驚奇和美好。
          </p>
          <p>
            Machi期待為您帶來一場法式點心的奇妙之旅，讓您的味蕾在這片小巷中尋找到最美味的驚喜。快來定制您獨特的甜蜜體驗，感受法式點心的獨特風情。
          </p>
        </header>

        <section className="lynn-comments">
          <div className="comments-title">
            <p>
              他們也都喜歡Machi
              <br />
              的客製化蛋糕！!
            </p>
          </div>
          <div className="comments-content d-flex">
            <div className="comment1">
              <Comment
                comment="蛋糕口感清爽不甜膩，家人很滿意。會再推薦給朋友！"
                name="Iris Lin"
              />
            </div>
            <div className="comment2">
              <Comment
                comment="店家提供貼心的服務，蛋糕質感超好，會再次回購。"
                name="Jane Li"
              />
            </div>
            <div className="mobile-none">
              <Comment
                comment="同事收到蛋糕時很感動，謝謝Machi讓我們留下完美的回憶！"
                name="Peggy"
              />
            </div>
          </div>
        </section>
        <section className="lynn-sample-section">
          <p>
            精選各式客製化作品，讓毫無頭緒的您，
            <br />
            快速找到自己喜歡的樣式來調整希望的客製化細節！
          </p>
          <div className="sample-img">
            <img src="/images/customize/samp1.png" alt="" />
            <img src="/images/customize/samp2.png" alt="" />
            <img src="/images/customize/samp3.png" alt="" />
            <img src="/images/customize/samp4.png" alt="" />
            <img src="/images/customize/samp5.png" alt="" />
            <img src="/images/customize/samp6.png" alt="" />
            <img src="/images/customize/samp7.png" alt="" />
            <img src="/images/customize/samp8.png" alt="" />
          </div>
        </section>
        <section className="lynn-start-customize">
          <h4>立即訂製您專屬的蛋糕！</h4>
          <div className="start-text">
            <p>
              立即訂製您的獨特蛋糕，來自Machi的美味驚喜！
              <br />
              挑選您喜愛的口味、餡料和外觀，讓我們為您打造一個完美的甜點享受。
            </p>
            <p>
              每個蛋糕都是我們對精緻烘焙的熱情，以及對品質承諾的結晶，為您的特別場合增添一絲奢華和美味。
              <br />
              趕快訂製您的蛋糕，為您的生日、紀念日或任何值得慶祝的時刻增添一份美好吧！
            </p>
          </div>

          <Link href="/customized-products/size" passHref>
            <button onClick={setDefaultCustomize}>開始訂製</button>
          </Link>
        </section>
      </div>
    </>
  )
}

Customize.getLayout = function getLayout(page) {
  return <CustomizeLayout>{page}</CustomizeLayout>
}

export default Customize
