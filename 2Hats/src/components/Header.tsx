import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/Logo.png';
import searchImg from '../assets/Search.png';
import basketImg from '../assets/Basket.png';
import profileImg from '../assets/Profile.png';
import heartImg from '../assets/Heart.png';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navItems = ['HOME','SPACES','PRODUCTS & SERVICES','SHOWROOMS','COMPANY','MEDIA'];

  return (
  <header className="ecom-header border-bottom">
    <div className="container-fluid py-4 d-flex flex-column align-items-center">
      <img src={logoImg} alt="Logo" className="ecom-logo-img" style={{ height: '48px', marginBottom: '0.3rem' }} />
      <nav className="ecom-menu d-flex flex-row align-items-center justify-content-between w-100 mt-2 mb-3">
        {/* Hamburger button visible on mobile */}
        <button className="ecom-hamburger d-md-none" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <div className="ecom-menu-left d-flex align-items-center" style={{ minWidth: 48, marginLeft: '-16px' }}>
          <img src={searchImg} alt="Search" className="ecom-search-img" style={{ height: '26px', width: '26px' }} />
        </div>
        <div className="ecom-menu-center d-flex flex-wrap gap-7 justify-content-center flex-grow-1" style={{ fontSize: '0.9rem' }}>
          <button className="ecom-menu-item btn btn-link p-0 active-menu-item" style={{ font: 'inherit' }} onClick={() => window.location.reload()}>HOME</button>
          <span className="ecom-menu-item">SPACES</span>
          <span className="ecom-menu-item">PRODUCTS & SERVICES</span>
          <span className="ecom-menu-item">SHOWROOMS</span>
          <span className="ecom-menu-item">COMPANY</span>
          <span className="ecom-menu-item">MEDIA</span>
        </div>
        <div className="ecom-menu-right d-flex align-items-center gap-3" style={{ minWidth: 48 }}>
          <img src={basketImg} alt="Basket" style={{ height: '22px', width: '22px' }} />
          <img src={heartImg} alt="Wishlist" style={{ height: '22px', width: '22px' }} />
          <img src={profileImg} alt="Profile" style={{ height: '22px', width: '22px' }} />
        </div>
      </nav>
    </div>
        {/* Mobile side drawer */}
      {open && (
        <div className="mobile-menu-overlay d-md-none" onClick={() => setOpen(false)}>
          <div className="mobile-menu" onClick={(e)=>e.stopPropagation()}>
            {navItems.map(item=> (
              <div key={item} className="mobile-menu-item" onClick={()=>{setOpen(false); window.location.reload();}}>{item}</div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
