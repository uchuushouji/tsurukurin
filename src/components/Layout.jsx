// src/components/Layout.jsx
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-300 to-white">
      {/* 泡背景：全ページ共通 */}
      <img
        src="/img/bubble.png"
        alt="泡"
        className="absolute bottom-0 left-0 w-full max-h-[50%] object-cover opacity-60 pointer-events-none z-0"
      />

      {/* ページ固有の内容 */}
      <main className="relative z-10 p-6 pb-24">{children}</main>

      {/* フッター or ナビ */}
      <Navbar />
    </div>
  );
}
