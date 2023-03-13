import React from 'react';
import { Container } from '@mantine/core';
import Testimonial from 'components/Testimonals/Testimonial';
import { Layout } from '../components/Layout/Layout';
import HeroSection from '../components/Home/HeroSection';
import HeroSectionCard from '../components/Home/HeroSectionCard';
import WelcomeGirlsFourInitative from '../components/Welcome/WelcomeGirlsFour';
import OurMajorCauses from '../components/MajorCauses/OurMajorCauses';
import OurKeyFeatures from '../components/OurKeyFeatures/OurKeyFeatures';
import UpComingEvent from '../components/UpComingEvents/UpComingEvent';

function index() {
  return (
    <>
      <Layout>
        <HeroSection />
        <Container size="xl">
          <HeroSectionCard />
        </Container>
        <Container size="xl">
          <WelcomeGirlsFourInitative />
        </Container>
        <OurMajorCauses />
        <OurKeyFeatures />
        <UpComingEvent />
        <Testimonial />
      </Layout>
    </>
  );
}

export default index;
