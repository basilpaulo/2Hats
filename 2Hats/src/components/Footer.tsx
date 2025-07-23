import React from 'react';
import './Footer.css';
import logoWhiteImg from '../assets/LogoWhite.png';
import facebookImg from '../assets/Facebook.png';
import instagramImg from '../assets/Instagram.png';
import twitterImg from '../assets/Twitter.png';

const Footer: React.FC = () => (
  <footer className="ecom-footer mt-0" style={{ backgroundColor: '#000', color: '#fff' }}>
    <div className="container-fluid">
      <div className="row ecom-footer-columns text-center text-md-start">
        <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
          <div className="ecom-footer-title">
            <img src={logoWhiteImg} alt="2Hats" style={{ height: '48px'}} />
          </div>
          <div className="ecom-footer-socials d-flex justify-content-center justify-content-md-start gap-2 mt-2">
            <a href="#" aria-label="Facebook">
              <img src={facebookImg} alt="Facebook" style={{ height: '16px', width: '16px' }} />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitterImg} alt="Twitter" style={{ height: '16px', width: '16px' }} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramImg} alt="Instagram" style={{ height: '16px', width: '16px' }} />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
          <div className="ecom-footer-heading">Products</div>
          <div className="ecom-footer-list">
            <div className="footer-highlight">Sand Stone</div>
            <div>Stone</div>
            <div>Cement</div>
            <div>Soft Stone</div>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
          <div className="ecom-footer-heading">Services</div>
          <div className="ecom-footer-list">
            <div>Measurement Service</div>
            <div>Product Advice</div>
            <div>Interior Design</div>
          </div>
        </div>
        <div className="col-12 col-md-3 ecom-footer-col">
          <div className="ecom-footer-heading">Contact information</div>
            <div>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, 
An Nuzhah, Riyadh 12474, 
Saudi Arabia</div>
          </div>
      </div>
    </div>
  </footer>
);

export default Footer;
