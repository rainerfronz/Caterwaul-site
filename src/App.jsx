import { Routes, Route } from 'react-router-dom';
import './App.css';

import Hero from './pages/Hero';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Sponsors from './sponsorship/Sponsors';
import BecomeSponsor from './sponsorship/SponsorPath';
import BandPage from './pages/BandPage';
import BandAdmin from './pages/BandAdmin';
import AdminNews from './pages/AdminNews';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/site" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />

      <Route path="/bands/:slug" element={<BandPage />} />

      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/become-a-sponsor" element={<BecomeSponsor />} />

      <Route path="/admin/bands" element={<BandAdmin />} />
      <Route path="/admin/news" element={<AdminNews />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}