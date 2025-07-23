import React from 'react';
import './Products.css';
import underlineImg from '../assets/Underline.png';
import bathroomImg from '../assets/BathroomTiles.png';
import marbleImg from '../assets/Marble.png';
import outdoorImg from '../assets/OutdoorFlooring.png';
import kitchenImg from '../assets/KitchenInterior.png';

const Products: React.FC = () => (
  <section className="ecom-products container py-4">
    <div className="text-center mb-3">
      <h1 className="ecom-hero-title text-black m-0" style={{ fontSize: '3rem', marginTop: '-10px' }}>Products</h1>
      <img src={underlineImg} alt="underline" style={{ display: 'block', margin: '12px auto 12px' }} />
      <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
      <p className="mt-0">been the industry's standard dummy text.</p>
      <div className="container mt-4">
        <div className="row g-0 justify-content-center">
          <div className="col-12 col-md-4">
            <img src={bathroomImg} alt="Bathroom Tiles" className="img-fluid w-100" style={{ objectFit: 'contain', height: '400px' }} />
          </div>
          <div className="col-12 col-md-4">
            <img src={marbleImg} alt="Marble" className="img-fluid w-100" style={{ height: '400px', width: '100%' }} />
          </div>
          <div className="col-12 col-md-4 d-flex flex-column" style={{ marginLeft: '-22px' }}>
            <img src={outdoorImg} alt="Outdoor Flooring" className="img-fluid  w-100" style={{ objectFit: 'contain', marginBottom: '3px', height: '200px' }} />
            <img src={kitchenImg} alt="Kitchen Interior" className="img-fluid  w-100" style={{ objectFit: 'contain', height: '200px' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
