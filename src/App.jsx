import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import BandPage from './pages/BandPage';
import BandAdmin from './pages/BandAdmin';
import AdminNews from './pages/AdminNews';
import BecomeSponsor from './sponsors/becomeSponsor';
import Sponsors from './sponsors/sponsors';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bands/:slug" element={<BandPage />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/become-a-sponsor" element={<BecomeSponsor />} />
      <Route path="/admin/bands" element={<BandAdmin />} />
      <Route path="/admin/news" element={<AdminNews />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}