import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={closeMenu}>G<span>tech</span></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}<span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-cv" to="/cv" onClick={closeMenu}>View CV <span>↗</span></NavLink>
        </nav>
      </div>
    </header>
  );
}
