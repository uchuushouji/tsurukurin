import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, CreditCard, Mail } from 'lucide-react';
import { BsLine } from 'react-icons/bs'; // LINEアイコン

export default function Navbar() {
  const location = useLocation();

  const items = [
    { to: '/', label: 'ホーム', icon: <Home size={20} /> },
    { to: '/services', label: 'サービス', icon: <Sparkles size={20} /> },
    { to: '/contact', label: '問合せ', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-50 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
  <ul
    className="flex justify-around items-center m-0 p-0 relative"
    style={{ listStyle: 'none' }}
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
              className={`p-2 rounded-full shadow-md transition-transform ${
                isActive
                  ? 'bg-sky-500 text-white scale-110'
                  : 'bg-white/70 text-blue-700 hover:scale-105'
              }`}
            >
              {icon}
            </div>
            <span className={`mt-1 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-500'}`}>
              {label}
            </span>
          </Link>
        </li>
      );
    })}

    {/* LINEボタン（常時表示） */}
    <li className="flex flex-col items-center justify-center text-xs">
      <a
        href="https://line.me/R/ti/p/148uaduk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-xs w-16"
      >
        <div className="p-2 rounded-full shadow-md bg-green-500 text-white hover:scale-105 transition-transform">
          <BsLine size={20} />
        </div>
        <span className="mt-1 text-green-600 font-bold">LINE</span>
      </a>
    </li>
  </ul>
</nav>

  );
}
