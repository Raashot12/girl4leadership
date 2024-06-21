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
const data: DataType = {
  id: 1,
  attributes: {
    HeroSection: {
      heroData: {
        title: 'Join the Movement',
        subject: 'Make a Difference',
        heroImage: 'https://example.com/hero-image.jpg',
        mainTitle: 'We Are Changing Lives',
        buttonTextOne: 'Donate Now',
        buttonTextTwo: 'Learn More',
      },
      ourReach: {
        image: 'https://example.com/reach-image.jpg',
        title: 'Our Global Reach',
        people: {
          count: '1.2M',
          label: 'People Helped',
        },
        content:
          'Our organization has helped over 1.2 million people across the globe.',
        projects: {
          count: '500',
          label: 'Projects Completed',
        },
        volunteers: {
          count: '20K',
          label: 'Active Volunteers',
        },
      },
      statement: {
        ourFuture: {
          title: 'Our Future',
          content: 'We strive to create a better tomorrow for all.',
        },
        ourVision: {
          title: 'Our Vision',
          content: 'A world where everyone has access to basic necessities.',
        },
        ourMission: {
          title: 'Our Mission',
          content: 'Empowering communities through sustainable development.',
        },
      },
      upComingEvent: {
        data: [
          {
            id: 1,
            image: 'https://example.com/event1.jpg',
            title: 'Charity Gala',
            content:
              'Join us for our annual charity gala to raise funds for our projects.',
            timeStamp: '2023-06-15T18:00:00.000Z',
          },
          {
            id: 2,
            image: 'https://example.com/event2.jpg',
            title: 'Volunteer Drive',
            content:
              "We're looking for passionate volunteers to join our cause.",
            timeStamp: '2023-07-01T10:00:00.000Z',
          },
        ],
        title: 'Upcoming Events',
        subTitle: 'Get Involved',
      },
      causesScrollData: {
        data: [
          {
            id: 1,
            pics: 'https://example.com/cause1.jpg',
            title: 'Education for All',
            total: '50000',
            raised: '25000',
            content:
              'Providing access to quality education for underprivileged children.',
          },
          {
            id: 2,
            pics: 'https://example.com/cause2.jpg',
            title: 'Clean Water Initiative',
            total: '75000',
            raised: '40000',
            content: 'Bringing clean water to communities in need.',
          },
        ],
        title: 'Causes We Support',
        subTitle: 'Make a Difference',
      },
      testimonialCards: {
        data: [
          {
            id: 1,
            name: 'John Doe',
            image: 'https://example.com/testimonial1.jpg',
            content:
              "This organization has changed my life. I'm grateful for their support.",
            workPosition: 'Beneficiary',
          },
          {
            id: 2,
            name: 'Jane Smith',
            image: 'https://example.com/testimonial2.jpg',
            content:
              'Volunteering with this organization has been a rewarding experience.',
            workPosition: 'Volunteer',
          },
        ],
        title: 'What People Say',
        subTitle: 'Testimonials',
      },
      keyfeatures: {
        title: 'Our Key Features',
        features: [
          {
            title: 'Sustainable Impact',
            subtitle: 'We focus on long-term solutions for lasting change.',
          },
          {
            title: 'Community Empowerment',
            subtitle: 'We work closely with local communities to empower them.',
          },
          {
            title: 'Transparency',
            subtitle: 'We maintain transparency in all our operations.',
          },
        ],
        subTitle: 'Why Choose Us',
      },
    },
  },
  createdAt: '2023-05-15T08:00:00.000Z',
  updatedAt: '2023-05-16T12:00:00.000Z',
  publishedAt: '2023-05-17T00:00:00.000Z',
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
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/home`
  // );
  // const value = await res.json();
  return {
    props: { homeData: data as DataType },
  };
};
export default HomePage;
