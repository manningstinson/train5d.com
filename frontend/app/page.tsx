import React from 'react';
import Header from '@/components/header/Index';
import Footer from '@/components/footer/Index';
import Container from '@/components/layout/container/Index';
import PageWrapper from '@/components/layout/page-wrapper/Index';
import Hero from '@/components/hero/Index';

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper>
        <Container fluid>
          <Hero />
        </Container>
      </PageWrapper>
      <Footer />
    </>
  );
}