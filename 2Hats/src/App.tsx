import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import chairImg from './assets/Chair.png';
import logoImg from './assets/Logo.png';
import searchImg from './assets/Search.png';

function App() {
  return (
    <div className="ecom-root">
      <header className="ecom-header border-bottom">
        <div className="container-fluid py-2 d-flex flex-column align-items-center">
          <img src={logoImg} alt="Logo" className="ecom-logo-img" style={{ height: '48px', marginBottom: '0.3rem' }} />
          <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.3em', cursor: 'pointer' } }}>
            <nav className="ecom-menu d-flex flex-row align-items-center justify-content-between w-100 mt-2">
              <div className="ecom-menu-left d-flex align-items-center" style={{ minWidth: 48 }}>
                <img src={searchImg} alt="Search" className="ecom-search-img" style={{ height: '22px', width: '22px' }} />
              </div>
              <div className="ecom-menu-center d-flex flex-wrap gap-3 justify-content-center flex-grow-1">
                <button className="ecom-menu-item btn btn-link p-0 active-menu-item" style={{ font: 'inherit' }} onClick={() => window.location.reload()}>HOME</button>
                <span className="ecom-menu-item">SPACES</span>
                <span className="ecom-menu-item">PRODUCTS & SERVICES</span>
                <span className="ecom-menu-item">SHOWROOMS</span>
                <span className="ecom-menu-item">COMPANY</span>
                <span className="ecom-menu-item">MEDIA</span>
                <span className="ecom-menu-item">CONTACT</span>
              </div>
              <div className="ecom-menu-right d-flex align-items-center gap-3" style={{ minWidth: 120, justifyContent: 'flex-end' }}>
                <span className="ecom-icon" title="Basket">
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.20485 7.25932C1.27976 6.80935 1.32383 6.35496 1.4384 5.9138C2.04213 3.60216 3.395 1.91255 5.70414 1.18464C8.17193 0.403802 10.3224 1.03465 12.1028 2.91396C12.3143 3.13454 12.4994 3.37717 12.7065 3.62422C12.9092 3.386 13.0943 3.14777 13.3014 2.92279C14.2841 1.86402 15.4563 1.12729 16.9061 0.942009C19.1447 0.655259 21.0617 1.33905 22.5335 3.06396C24.0054 4.78886 24.4373 6.82699 24.0979 9.04158C23.882 10.4444 23.243 11.6664 22.4058 12.7914C21.3085 14.2692 19.9688 15.5133 18.5895 16.7176C16.9634 18.1337 15.3241 19.541 13.6892 20.9483C13.059 21.4909 12.3848 21.513 11.7811 20.9924C9.64819 19.1396 7.51091 17.2956 5.40448 15.4118C4.33364 14.4589 3.37738 13.3913 2.58857 12.1826C1.84823 11.04 1.35027 9.80919 1.23569 8.44161C1.23129 8.38867 1.21366 8.34015 1.20044 8.29162C1.20485 7.94752 1.20485 7.60342 1.20485 7.25932ZM12.7021 20.0086C12.7594 19.9645 12.8078 19.9292 12.8519 19.8895C14.6719 18.3146 16.5007 16.7529 18.3031 15.1648C19.5634 14.0531 20.762 12.8752 21.6919 11.4635C22.582 10.118 23.0183 8.65337 22.8156 7.02992C22.5952 5.27854 21.8461 3.82715 20.2949 2.91396C18.8495 2.06254 17.3204 1.95666 15.7868 2.6978C14.879 3.13454 14.2092 3.8448 13.6451 4.66975C13.5658 4.78886 13.4909 4.91239 13.4072 5.02709C13.037 5.53441 12.376 5.53 12.0014 5.0315C11.6753 4.59476 11.3756 4.13155 11.0011 3.73451C9.79802 2.45958 8.30854 1.96548 6.59431 2.33605C4.74347 2.7375 3.52721 3.91097 2.91467 5.67558C2.20077 7.72694 2.54009 9.65919 3.7211 11.4591C4.45263 12.5752 5.3516 13.5546 6.33872 14.4413C7.96922 15.9103 9.63497 17.3441 11.2831 18.7867C11.7546 19.1969 12.2261 19.5984 12.7021 20.0086Z" fill="black" stroke="black" stroke-width="0.5" stroke-miterlimit="10"/>
                  </svg>
                </span>
                <span className="ecom-icon" title="Wishlist">
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.20485 7.25932C1.27976 6.80935 1.32383 6.35496 1.4384 5.9138C2.04213 3.60216 3.395 1.91255 5.70414 1.18464C8.17193 0.403802 10.3224 1.03465 12.1028 2.91396C12.3143 3.13454 12.4994 3.37717 12.7065 3.62422C12.9092 3.386 13.0943 3.14777 13.3014 2.92279C14.2841 1.86402 15.4563 1.12729 16.9061 0.942009C19.1447 0.655259 21.0617 1.33905 22.5335 3.06396C24.0054 4.78886 24.4373 6.82699 24.0979 9.04158C23.882 10.4444 23.243 11.6664 22.4058 12.7914C21.3085 14.2692 19.9688 15.5133 18.5895 16.7176C16.9634 18.1337 15.3241 19.541 13.6892 20.9483C13.059 21.4909 12.3848 21.513 11.7811 20.9924C9.64819 19.1396 7.51091 17.2956 5.40448 15.4118C4.33364 14.4589 3.37738 13.3913 2.58857 12.1826C1.84823 11.04 1.35027 9.80919 1.23569 8.44161C1.23129 8.38867 1.21366 8.34015 1.20044 8.29162C1.20485 7.94752 1.20485 7.60342 1.20485 7.25932ZM12.7021 20.0086C12.7594 19.9645 12.8078 19.9292 12.8519 19.8895C14.6719 18.3146 16.5007 16.7529 18.3031 15.1648C19.5634 14.0531 20.762 12.8752 21.6919 11.4635C22.582 10.118 23.0183 8.65337 22.8156 7.02992C22.5952 5.27854 21.8461 3.82715 20.2949 2.91396C18.8495 2.06254 17.3204 1.95666 15.7868 2.6978C14.879 3.13454 14.2092 3.8448 13.6451 4.66975C13.5658 4.78886 13.4909 4.91239 13.4072 5.02709C13.037 5.53441 12.376 5.53 12.0014 5.0315C11.6753 4.59476 11.3756 4.13155 11.0011 3.73451C9.79802 2.45958 8.30854 1.96548 6.59431 2.33605C4.74347 2.7375 3.52721 3.91097 2.91467 5.67558C2.20077 7.72694 2.54009 9.65919 3.7211 11.4591C4.45263 12.5752 5.3516 13.5546 6.33872 14.4413C7.96922 15.9103 9.63497 17.3441 11.2831 18.7867C11.7546 19.1969 12.2261 19.5984 12.7021 20.0086Z" fill="black" stroke="black" stroke-width="0.5" stroke-miterlimit="10"/>
                  </svg>
                </span>
                <span className="ecom-icon" title="Profile">
                  <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.485 10.7345C14.7052 11.4291 15.6384 12.3824 16.3466 13.5657C17.1027 14.8352 17.5573 16.2149 17.7631 17.6664C17.897 18.6149 17.9401 19.5778 17.9975 20.5359C18.031 21.0772 17.72 21.3694 17.1745 21.3694C11.8723 21.3694 6.57019 21.3694 1.26806 21.3694C0.712958 21.3694 0.421054 21.082 0.425839 20.5215C0.440195 18.5909 0.684247 16.7035 1.4164 14.9023C2.12463 13.1633 3.2109 11.7405 4.85705 10.7824C4.88097 10.768 4.9049 10.7441 4.92883 10.7249C2.4931 8.15722 3.03862 4.23379 5.44086 2.23136C7.72345 0.319946 11.0636 0.410966 13.2314 2.45172C15.447 4.53559 15.8106 8.19554 13.485 10.7345ZM16.5189 19.8988C16.428 17.9682 16.1265 16.1047 15.1551 14.4136C14.5043 13.2783 13.6046 12.4064 12.4131 11.8363C12.2695 11.7645 12.1642 11.7693 12.0207 11.8459C10.14 12.8423 8.25463 12.828 6.37878 11.8315C6.25915 11.7693 6.16344 11.7549 6.04381 11.8172C5.11067 12.2627 4.33066 12.895 3.71814 13.7286C2.82807 14.9358 2.35911 16.3107 2.12463 17.7766C2.01457 18.4712 1.95714 19.1802 1.87101 19.8988C6.77596 19.8988 11.6331 19.8988 16.5189 19.8988ZM13.6046 6.72007C13.6046 4.29607 11.6378 2.31759 9.21648 2.31759C6.7951 2.31759 4.81876 4.28649 4.81876 6.71048C4.81876 9.13448 6.78553 11.113 9.2069 11.113C11.6283 11.1178 13.6046 9.14406 13.6046 6.72007Z" fill="black" stroke="black" stroke-width="0.5" stroke-miterlimit="10"/>
                  </svg>
                </span>
              </div>
            </nav>
          </IconContext.Provider>
        </div>
      </header>
      <main style={{ position: 'relative', width: '100vw', minHeight: '676px' }}>
        <section className="ecom-hero position-relative">
          <img
            src={chairImg}
            alt="Hero Banner"
            className="ecom-hero-img"
            style={{ zIndex: 2 }}
          />
          <div className="ecom-hero-overlay">
            <h1 className="ecom-hero-title">New Generation Ceramic Tile</h1>
            <p className="ecom-hero-desc">
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus meceanas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </p>
            <button className="ecom-hero-btn">LEARN MORE</button>
          </div>
        </section>
        <section className="ecom-products container py-4">
          <h2 className="mb-4">Featured Products</h2>
          <div className="ecom-product-grid">
            {[2, 3, 4, 5].map((n) => (
              <div className="ecom-product-card card h-100 text-center" key={n}>
                <img
                  src={`https://picsum.photos/200/200?random=${n}`}
                  srcSet={`https://picsum.photos/100/100?random=${n} 100w, https://picsum.photos/200/200?random=${n} 200w`}
                  sizes="(max-width: 600px) 100vw, 200px"
                  alt={`Product ${n}`}
                  className="card-img-top img-fluid"
                  loading="lazy"
                />
                <div className="ecom-product-title card-body p-2">
                  Product {n}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="ecom-secondary-images container py-4">
          <div className="ecom-secondary-grid">
            {[6, 7, 8].map((n) => (
              <div key={n}>
                <img
                  src={`https://picsum.photos/400/150?random=${n}`}
                  srcSet={`https://picsum.photos/200/75?random=${n} 200w, https://picsum.photos/400/150?random=${n} 400w`}
                  sizes="(max-width: 600px) 100vw, 400px"
                  alt={`Showcase ${n}`}
                  className="ecom-secondary-img img-fluid rounded"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="ecom-footer mt-0">
        <div className="container-fluid">
          <div className="row ecom-footer-columns text-center text-md-start">
            <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
              <div className="ecom-footer-title">2Hats</div>
              <IconContext.Provider value={{ style: { fontSize: '1.5rem', color: '#fff', background: '#222', borderRadius: '50%', padding: '0.4rem' } }}>
                <div className="ecom-footer-socials d-flex justify-content-center justify-content-md-start gap-3 mt-2">
                  <a href="#" aria-label="Facebook" className="ecom-footer-social-icon"><FaFacebook /></a>
                  <a href="#" aria-label="Twitter" className="ecom-footer-social-icon"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram" className="ecom-footer-social-icon"><FaInstagram /></a>
                </div>
              </IconContext.Provider>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
              <div className="ecom-footer-heading">About</div>
              <div className="ecom-footer-list">
                <div>About Us</div>
                <div>Careers</div>
                <div>Sustainability</div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-md-0 ecom-footer-col">
              <div className="ecom-footer-heading">Support</div>
              <div className="ecom-footer-list">
                <div>Help Center</div>
                <div>Contact</div>
                <div>FAQs</div>
              </div>
            </div>
            <div className="col-12 col-md-3 ecom-footer-col">
              <div className="ecom-footer-heading">Legal</div>
              <div className="ecom-footer-list">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>&copy; 2024 2Hats. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
