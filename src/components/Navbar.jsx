import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, CreditCard, Mail } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const items = [
    { to: '/', label: 'ホーム', icon: <Home size={20} /> },
    { to: '/services', label: 'サービス', icon: <Sparkles size={20} /> },
    { to: '/pricing', label: '料金', icon: <CreditCard size={20} /> },
    { to: '/contact', label: '問合せ', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 py-2">
      
      {/* 背景画像を下に入れる */}
      <img
  src="/img/bubble.png"
  alt="泡"
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen z-0 pointer-events-none"
/>

      
      <ul
        className="flex justify-around items-center m-0 p-0 z-10 relative"
        style={{ listStyle: 'none' }} // ← ← ← これでドット完全に消す！
      >
        {items.map(({ to, label, icon }) => {
          const isActive = location.pathname === to;
          return (
            <li key={to} className="flex flex-col items-center justify-center text-xs">
              <Link
                to={to}
                className="flex flex-col items-center justify-center text-xs w-16"
              >
                <div
                  className={`p-3 rounded-full shadow-md mb-1 transition-transform ${
                    isActive ? 'bg-sky-300 scale-110' : 'bg-sky-100 hover:scale-105'
                  }`}
                >
                  {icon}
                </div>
                <span className={isActive ? 'text-blue-600 font-bold' : ''}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
