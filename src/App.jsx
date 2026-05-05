import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Sponsors from './sponsors/Sponsor';
import BecomeSponsor from './sponsors/BecomeSponsor';
import BandPage from './pages/BandPage';

// Admin
import BandAdmin from './pages/BandAdmin';
import AdminNews from './pages/AdminNews';

// Optional splash / flyer page
import Hero from './pages/Hero';

export default function App() {
  return (
    <Routes>
      {/* PUBLIC SITE */}

      {/* Landing / flyer */}
      <Route path="/" element={<Hero />} />

      {/* Main site */}
      <Route path="/home" element={<Home />} />

      {/* Core pages */}
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/bands/:slug" element={<BandPage />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/become-a-sponsor" element={<BecomeSponsor />} />

      {/* ADMIN (keep these hidden from normal users) */}
      <Route path="/admin/bands" element={<BandAdmin />} />
      <Route path="/admin/news" element={<AdminNews />} />

      {/* 404 fallback (important) */}
      <Route path="*" element={<div style={{ padding: 40 }}>Page Not Found</div>} />
    </Routes>
      );
}