import React from 'react';
import Header from '@/components/header/Index';
import Footer from '@/components/footer/Index';
import Container from '@/components/layout/container/Index';
import PageWrapper from '@/components/layout/page-wrapper/Index';

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Container fluid>
          <h1 className="welcome-title">Welcome to Train5D</h1>
          <div className="features-grid">
            <div className="feature-box">
              <h2 className="feature-title">Target Audience</h2>
              <p className="feature-description">Description of the target audience for Train5D wellness coaching.</p>
            </div>

            <div className="feature-box">
              <h2 className="feature-title">5 Core Concepts</h2>
              <ul className="core-concepts-list">
                <li className="core-concept-item">Concept 1</li>
                <li className="core-concept-item">Concept 2</li>
                <li className="core-concept-item">Concept 3</li>
                <li className="core-concept-item">Concept 4</li>
                <li className="core-concept-item">Concept 5</li>
              </ul>
            </div>

            <div className="feature-box">
              <h2 className="feature-title">Locations</h2>
              <div className="locations-list">
                <p className="location-item">Gym</p>
                <p className="location-item">Pool</p>
                <p className="location-item">Online</p>
              </div>
            </div>
          </div>
        </Container>
      </PageWrapper>
      <Footer />
    </>
  );
}