import { motion, AnimatePresence } from 'framer-motion';

export default function DesktopLP() {
  return (
    <div className="bg-white　overflow-hidden　w-full max-w-screen-xl mx-auto">
      {/* HERO セクション */}
      <section className="relative min-h-screen py-20 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url('/img/LPHero.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  />
  <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 min-h-screen max-w-screen-xl mx-auto">
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      <a
        href="#reservation"
        className="bg-blue-500 text-white px-6 py-4 rounded-full text-base font-bold shadow-lg hover:scale-105 transition min-w-[140px] whitespace-nowrap text-center"
      >
        今すぐ予約
      </a>
      <a
        href="https://line.me/R/ti/p/@148uaduk"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-4 rounded-full text-base font-bold shadow-lg hover:scale-105 transition min-w-[140px] whitespace-nowrap text-center"
      >
        LINE相談
      </a>
    </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-black text-sm opacity-80 animate-bounce z-30">
      Scroll
    </div>
  </div>
</section>


      {/* 背景画像セクション2つ */}
{['kyoukan.png', 'sokyuu.png'].map((img, i) => (
  <section key={i} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url('/img/${img}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
    <div className="relative z-10 max-w-screen-xl w-full h-full"></div>
  </section>
))}


      {/* お客様の声 */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 text-center">
        <div className="w-full max-w-screen-xl">
          <h2 className="text-xl font-bold mb-4 text-gray-800">お客様の声</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                text: '「とても清潔感があり、...また来年もお願いしたい業者さんです。オススメ！！」',
                name: '東京都・I様'
              },
              {
                text: '「連絡・説明から作業までとても丁寧で...また定期的にお願いしたいです。」',
                name: '山梨県・W様'
              }
            ].map((c, i) => (
              <div key={i} className="p-6 bg-blue-100 rounded-xl shadow text-center">
                <p className="mb-2 text-sm text-gray-800 italic">{c.text}</p>
                <span className="text-xs text-gray-600">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4 text-center">
        <div className="w-full max-w-screen-xl">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Before / After</h2>
          <div className="grid grid-cols-2 gap-6">
            {["ba1.png", "ba2.png"].map((img, i) => (
              <img key={i} src={`/img/${img}`} alt={img} className="rounded-xl shadow object-cover w-full max-h-96" />
            ))}
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10 text-center">
        <div className="w-full max-w-screen-xl grid grid-cols-2 gap-6">
          {[
            { title: 'ノーマルエアコン', price: '¥9,000', points: ['・高圧洗浄込み', '・作業時間：約1時間'] },
            { title: 'お掃除機能付きエアコン', price: '¥17,000', points: ['・高圧洗浄込み', '・作業時間：約2時間'] },
            { title: 'キッチン清掃', price: '¥15,000', points: ['・換気扇の分解洗浄対応', '・コンロの油汚れ除去'] },
            { title: '浴室クリーニング', price: '¥15,000', points: ['・高圧洗浄＋防カビ処理', '・鏡・排水口・天井対応'] },
            { title: '空室1R/1kクリーニング', price: '¥22,000', points: ['・水回り', '・エアコンの簡易清掃'] },
            { title: '空室1DKクリーニング', price: '¥27,000', points: ['・水回り', '・エアコンの簡易清掃'] }
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">{p.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">{p.price}</p>
              <ul className="text-sm text-gray-600 mb-4 text-left">
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 予約フォーム */}
      <section id="reservation" className="min-h-screen bg-white flex flex-col justify-center items-center px-4 text-center">
        <div className="w-full max-w-screen-md">
          <h2 className="text-xl font-bold mb-4 text-gray-800">予約フォーム</h2>
          <form
            action="https://formspree.io/f/xeoapwaa"
            method="POST"
            className="space-y-4 text-left"
          >
            {["お名前", "メールアドレス", "希望日時"].map((label, i) => (
              <div key={i}>
                <label className="block text-sm text-gray-700 mb-1">{label}</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm text-gray-700 mb-1">依頼内容</label>
              <textarea
                rows="3"
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 対応地域 */}
      <section className="w-full min-h-screen bg-white flex flex-col items-center px-4 py-10 text-center">
        <div className="w-full max-w-screen-md">
          <h2 className="text-xl font-bold mb-6 text-gray-800">対応地域</h2>
          {[
            { title: '東京都', text: '西側中心：町田市、八王子市、西多摩郡など' },
            { title: '神奈川県', text: '相模原市、厚木市、その他西部地域' },
            { title: '山梨県', text: '全域対応' },
            { title: '静岡県', text: '御殿場市、小山町 など' }
          ].map((area, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl shadow mb-4 text-left">
              <h3 className="font-bold text-blue-600 mb-1">{area.title}</h3>
              <p className="text-sm text-gray-700">{area.text}</p>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-4">上記以外のエリアはご相談ください。</p>
          <p className="text-xs text-gray-500 mt-4">その他何でも一度ご相談ください！</p>
        </div>
      </section>

      {/* LINE固定ボタン */}
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
}
