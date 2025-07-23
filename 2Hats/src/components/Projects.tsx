import React from 'react';
import underlineImg from '../assets/Underline.png';
import kingdomTowerImg from '../assets/KingdomTower.png';
import dubaiMallImg from '../assets/DubaiMall.png';
import kingRoadImg from '../assets/KingRoadOffices.png';
import beachTowerImg from '../assets/BeachTowerAlupang.png';

const Projects: React.FC = () => (
  <section className="ecom-projects container py-4">
    <div className="text-center mb-3">
      <h1 className="ecom-hero-title text-black m-0" style={{ fontSize: '3rem', marginTop: '-10px' }}>Projects</h1>
      <img src={underlineImg} alt="underline" style={{ display: 'block', margin: '12px auto 12px' }} />
      <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
      <p className="mt-0">been the industry's standard dummy text.</p>
      <div className="container mt-4">
        <div className="row g-0 justify-content-center">
          {[kingdomTowerImg, dubaiMallImg, kingRoadImg, beachTowerImg].map((src, idx) => (
            <div key={idx} className="col-12 col-md-3" style={{ padding: '10px' }}>
              <img src={src} alt="project" className="img-fluid w-100" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="btn px-4" style={{ backgroundColor: '#000', color: '#fff', borderRadius: '0' }}>VIEW ALL</button>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
