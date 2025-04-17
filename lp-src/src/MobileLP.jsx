import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function App() {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        direction="vertical"
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-screen h-screen bg-white"
      >




        <SwiperSlide>
          <section
            className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: `url('./img/LPHero.png')` }}
          >

            {/* 🔥 中央下・大きめボタン2つ */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-40">
              <button
                onClick={() => swiperRef.current.slideTo(6)}

                className="bg-blue-500 text-white px-6 py-4 rounded-full text-base font-bold shadow-lg hover:scale-105 transition text-center min-w-[140px] whitespace-nowrap"
              >
                今すぐ予約
              </button>
              <a
                href="https://line.me/R/ti/p/@148uaduk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-4 rounded-full text-base font-bold shadow-lg hover:scale-105 transition text-center min-w-[140px] whitespace-nowrap"
              >
                LINE相談
              </a>
            </div>


            {/* スワイプ誘導 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black text-sm opacity-80 animate-bounce z-30">
              Swipe
            </div>
          </section>
        </SwiperSlide>





        {/* お悩み訴求セクション */}
        <SwiperSlide>
          <section
            className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: `url('./img/kyoukan.png')` }}
          >
          </section>
        </SwiperSlide>

        {/* お悩み訴求セクション */}
        <SwiperSlide>
          <section
            className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
            style={{ backgroundImage: `url('./img/sokyuu.png')` }}
          >
          </section>
        </SwiperSlide>


        {/* お客様の声（横スワイプ） */}
        <SwiperSlide>
          <section className="w-full h-screen bg-white flex flex-col justify-center items-center px-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">お客様の声</h2>
            <Swiper spaceBetween={20} slidesPerView={1} className="w-full max-w-xs">
              <SwiperSlide>
                <div className="p-6 bg-blue-100 rounded-xl shadow text-center">
                  <p className="mb-2 text-sm text-gray-800 italic">「とても清潔感があり、きちんと使い捨てのスリッパも持参して下さり作業も丁寧でした。無駄な話もなく、作業で必要な事は必ず確認してくれました。毎年、特に業者さんを決めてなかったのですが、また来年もお願いしたい業者さんです。オススメ！！」</p>
                  <span className="text-xs text-gray-600">東京都・I様</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-6 bg-blue-100 rounded-xl shadow text-center">
                  <p className="mb-2 text-sm text-gray-800 italic">「連絡・説明から作業までとても丁寧で、エアコンも綺麗になりお願いして本当に良かったです。遠くからお越しにも関わらず交通費も含まれ良心的なお値段で助かりました。また定期的にお願いしたいです。」</p>
                  <span className="text-xs text-gray-600">山梨県・W様</span>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center items-center gap-1 text-gray-500 text-sm mt-4 opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Swipe
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </section>
        </SwiperSlide>


        <SwiperSlide>
          <section className="w-full h-screen bg-white flex flex-col justify-center items-center px-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Before / After</h2>

            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full max-w-md"
            >
              {/* スライド1 */}
              <SwiperSlide>
                <img
                  src="./img/ba1.png"
                  alt="Before After 1"
                  className="rounded-xl shadow object-cover w-full max-h-96"
                />
              </SwiperSlide>

              {/* スライド2 */}
              <SwiperSlide>
                <img
                  src="./img/ba2.png"
                  alt="Before After 2"
                  className="rounded-xl shadow object-cover w-full max-h-96"
                />
              </SwiperSlide>

              {/* 必要に応じてもっと追加 */}
            </Swiper>
            <div className="flex justify-center items-center gap-1 text-gray-500 text-sm mt-4 opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Swipe
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </section>
        </SwiperSlide>



        {/* 料金 1*/}
        <SwiperSlide>
          <section className="w-full h-screen bg-gray-50 flex flex-col items-center px-6 py-10 text-center">
            <h2 className="text-xl font-bold mb-6 text-gray-800">料金プラン</h2>

            <Swiper
              spaceBetween={32}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full max-w-md"
            >
              {/* スライド1：プラン1＋プラン2 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4">
                  {/* プラン1 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">ノーマルエアコン</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">¥9,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・高圧洗浄込み</li>
                      <li>・作業時間：約1時間</li>
                    </ul>
                  </div>

                  {/* プラン2 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">お掃除機能付きエアコン</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">¥17,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・高圧洗浄込み</li>
                      <li>・作業時間：約2時間</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              {/* スライド2：プラン3＋プラン4 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4">
                  {/* プラン3 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">キッチン清掃</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">¥15,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・換気扇の分解洗浄対応</li>
                      <li>・コンロの油汚れ除去</li>
                    </ul>
                  </div>

                  {/* プラン4 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">浴室クリーニング</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">¥15,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・高圧洗浄＋防カビ処理</li>
                      <li>・鏡・排水口・天井対応</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col gap-4">
                  {/* プラン3 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">空室1R/1kクリーニング</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">¥22,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・水回り</li>
                      <li>・エアコンの簡易清掃</li>
                    </ul>
                  </div>

                  {/* プラン4 */}
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-blue-600">空室1DKクリーニング</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-2">27,000</p>
                    <ul className="text-sm text-gray-600 mb-4 text-left">
                      <li>・水回り</li>
                      <li>・エアコンの簡易清掃</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

              {/* 必要に応じてさらにスライド追加OK */}
            </Swiper>

            <div className="flex justify-center items-center gap-1 text-gray-500 text-sm mt-4 opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Swipe
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </section>
        </SwiperSlide>



        <SwiperSlide>
          <section className="w-full h-screen bg-white flex flex-col justify-center items-center px-6 text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">予約フォーム</h2>

            <form
              action="https://formspree.io/f/xeoapwaa"
              method="POST"
              className="w-full max-w-md space-y-4 text-left"
            >

              {/* 名前 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">お名前</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">メールアドレス</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              {/* 日時 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">希望日時</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              {/* 内容 */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">依頼内容</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

              </div>

              {/* 送信ボタン */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                >
                  送信する
                </button>
              </div>
            </form>
          </section>
        </SwiperSlide>


        <SwiperSlide>
          <section className="w-full min-h-screen bg-white flex flex-col items-center px-6 py-10 text-center">
            <h2 className="text-xl font-bold mb-6 text-gray-800">対応地域</h2>

            {/* 対応エリア表 */}
            <div className="w-full max-w-md space-y-4 text-left">
      {/* 東京 */}
      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <h3 className="font-bold text-blue-600 mb-1">東京都</h3>
        <p className="text-sm text-gray-700">
          西側中心：町田市、八王子市、西多摩郡など
        </p>
      </div>

      {/* 神奈川 */}
      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <h3 className="font-bold text-blue-600 mb-1">神奈川県</h3>
        <p className="text-sm text-gray-700">
          相模原市、厚木市、その他西部地域
        </p>
      </div>

      {/* 山梨 */}
      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <h3 className="font-bold text-blue-600 mb-1">山梨県</h3>
        <p className="text-sm text-gray-700">
          全域対応
        </p>
      </div>

      {/* 静岡 */}
      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <h3 className="font-bold text-blue-600 mb-1">静岡県</h3>
        <p className="text-sm text-gray-700">
          御殿場市、小山町 など
        </p>
      </div>
    </div>

            {/* 補足＆CTA */}
            <p className="text-xs text-gray-500 mt-4">上記以外のエリアはご相談ください。</p>
            <p className="text-xs text-gray-500 mt-4">その他何でも一度ご相談ください！</p>

          </section>
        </SwiperSlide>


      </Swiper>

      {/* ✅ ファーストビュー以外でLINEボタンを右下に固定 */}

      <AnimatePresence>
  {activeIndex !== 0 && (
    <>
      {/* LINE相談ボタン（右下） */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <a
          href="https://line.me/R/ti/p/@148uaduk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 w-36 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition text-white font-semibold text-sm whitespace-nowrap"
        >
          LINEで相談
        </a>
      </motion.div>

      {/* トップに戻るボタン（左下） */}
      <motion.button
        onClick={() => swiperRef.current.slideTo(0)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 z-50 bg-white bg-opacity-50 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition text-sm"
      >
        トップに戻る
      </motion.button>
    </>
  )}
</AnimatePresence>



    </>
  );
}
