

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import Home from './pages/Home';
import Sponsors from './sponsors/sponsors';
import BecomeSponsor from './sponsors/becomeSponsor';
import BandPage from './pages/bandPage';
import BandAdmin from './pages/BandAdmin';
import AdminNews from './pages/AdminNews';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/site" element={<Home />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/become-a-sponsor" element={<BecomeSponsor />} />
      <Route path="/bands/:slug" element={<BandPage />} />
      <Route path="/admin/news" element={<AdminNews />} />
      <Route path="/admin/bands" element={<BandAdmin />} />
    </Routes>
  );
}