import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
  <Hero />

  {/* Products section */}
  <section id="products-section">
    <Products />
  </section>

  {/* Projects section */}
  <section id="projects-section">
    <Projects />
  </section>
</main>

{/* Footer */}
<footer id="footer-section">
  <Footer />
</footer>
  </>
);

export default Home;
