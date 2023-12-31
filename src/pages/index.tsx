import React from 'react';
import { Container } from '@mantine/core';
import Testimonial from 'components/Testimonals/Testimonial';
import { GetStaticProps } from 'next';
import { DataType } from 'types/merchSection';
import { Layout } from '../components/Layout/Layout';
import HeroSection from '../components/Home/HeroSection';
import HeroSectionCard from '../components/Home/HeroSectionCard';
import WelcomeGirlsFourInitative from '../components/Welcome/WelcomeGirlsFour';
import OurMajorCauses from '../components/MajorCauses/OurMajorCauses';
import OurKeyFeatures from '../components/OurKeyFeatures/OurKeyFeatures';
import UpComingEvent from '../components/UpComingEvents/UpComingEvent';

type HomeProps = {
  homeData: DataType;
};
const HomePage: React.FC<HomeProps> = ({ homeData }) => {
  return (
    <>
      <Layout pageTitle="Home">
        <HeroSection {...homeData.attributes.HeroSection.heroData} />
        <Container size="xl">
          <HeroSectionCard
            cardData={homeData.attributes.HeroSection.statement}
          />
        </Container>
        <Container size="xl">
          <WelcomeGirlsFourInitative
            ourReach={homeData.attributes.HeroSection.ourReach}
          />
        </Container>
        <OurMajorCauses
          causes={homeData.attributes.HeroSection.causesScrollData}
        />
        <OurKeyFeatures
          keyfeatures={homeData.attributes.HeroSection.keyfeatures}
        />
        <UpComingEvent
          upComingEvent={homeData.attributes.HeroSection.upComingEvent}
        />
        <Testimonial
          testimonialCards={homeData.attributes.HeroSection.testimonialCards}
        />
      </Layout>
    </>
  );
};
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/home`
  );
  const value = await res.json();
  return {
    props: { homeData: value.data as DataType },
  };
};
export default HomePage;
