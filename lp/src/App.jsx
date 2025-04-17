import { useEffect, useState } from 'react';
import MobileLP from './MobileLP';
import DesktopLP from './DesktopLP';

export default function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileLP /> : <DesktopLP />;
}
