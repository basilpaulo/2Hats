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
      <Products />
      <Projects />
    </main>
    <Footer />
  </>
);

export default Home;
