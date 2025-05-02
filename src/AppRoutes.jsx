import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Simulation from './pages/Simulation';
import CustomerInfo from './pages/CustomerInfo';
import Confirm from './pages/Confirm';
import Thanks from './pages/Thanks';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* 泡背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <img
          src="img/bubble.png"
          alt="泡"
          className="absolute bottom-0 left-0 w-full max-h-[50%] object-cover opacity-60"
        />
      </div>

      {/* 全体レイアウト */}
      <div className="min-h-screen flex flex-col justify-between pb-20">

        {/* ヘッダー */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-2">
            {/* ロゴと社名 */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="img/logo.png"
                  alt="つるクリン ロゴ"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-medium tracking-wide text-blue-500" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
  つるクリン
</span>


            </Link>

            {/* SNS・メニューアイコン */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/tsurukurin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 hover:scale-105 transition transform"
              >
                <Instagram size={24} className="text-gray-700" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 hover:scale-105 transition transform"
              >
                {menuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
              </button>
            </div>
          </div>
        </header>





        {/* 背景オーバーレイ */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* サイドメニュー */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-2xl z-40 p-6 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-gray-800">メニュー</span>
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-gray-700 hover:text-red-500 transition" />
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              { id: 'aircon', label: 'エアコンクリーニング' },
              { id: 'water', label: '水回りクリーニング' },
              { id: 'washing', label: '洗濯機クリーニング' },
              { id: 'kitchen', label: 'キッチンクリーニング' },
              { id: 'airbnb', label: '民泊・Airbnb清掃' },
              { id: 'vacant', label: '空き家クリーニング' },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/services#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-3 rounded-lg bg-white shadow hover:bg-blue-100 transition font-semibold text-gray-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* メイン：ホームだけ特別、他は余白あり */}
        <main className={`flex-grow ${isHome ? '' : 'pt-28 px-6'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Simulation" element={<Simulation />} />
            <Route path="/Customerinfo" element={<CustomerInfo />} />
            <Route path="/Confirm" element={<Confirm />} />
            <Route path="/Thanks" element={<Thanks />} />
          </Routes>
        </main>

        <Navbar />
      </div>
    </>
  );
}
