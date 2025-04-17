import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>

<div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="bubble bubble1"></div>
  <div className="bubble bubble2"></div>
  <div className="bubble bubble3"></div>
</div>


      <div className="pb-20"> {/* ← ナビ分の余白（下に被らないように） */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}
