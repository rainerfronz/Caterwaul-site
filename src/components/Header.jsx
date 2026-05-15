import { link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div>
          <div className="logo">CATERWAUL</div>
          <div className="subhead">MINNEAPOLIS • JUNE 5–7, 2026 • ZHORA DARLING</div>
        </div>

        <nav className="nav">
          <a href="#lineup" className="nav-link">Lineup</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://ticketstripe.com/caterwaul2026" className="ticket-button">Tickets</a>
        </nav>
      </div>
    </header>
  );
}