

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import Home from './pages/Home';
import Sponsors from './sponsors/sponsors';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/site" element={<Home />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}