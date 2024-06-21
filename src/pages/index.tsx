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
        title: 'WE ARE INSPIRING A GENERATION OF FEMALE LEADERS.',
        subject:
          'Girls 4 Leadership is increasing girls<br>skills and capacity to be leaders.When girls lead, we rise together',
        heroImage: 'https://example.com/hero-image.jpg',
        mainTitle: 'Leadership has no gender',
        buttonTextOne: 'Donate Now',
        buttonTextTwo: 'Learn More',
      },
      ourReach: {
        image:
          'https://res.cloudinary.com/rashot/image/upload/v1678048270/IMG_4759_1_aad_dkqvtw.jpg',
        title: 'Our Reach',
        people: {
          count: '10000+',
          label: 'People Reached',
        },
        content:
          'We are committed to achieving tangible and measurable results. We aim to empower and equip 1 million girls with leadership capacities by 2030.',
        projects: {
          count: '10+',
          label: 'Projects',
        },
        volunteers: {
          count: '120+',
          label: 'Volunteers',
        },
      },
      statement: {
        ourFuture: {
          title: 'Our Mission',
          content:
            'Our mission is to inspire a generation of female leaders through projects and advocacy programs',
        },
        ourVision: {
          title: 'Our Vision',
          content:
            'We envision an equal world that allows girls to be leaders and active decision-makers',
        },
        ourMission: {
          title: 'Our Future Plans',
          content:
            'We are on a mission to equip 1 million girls with leadership capacities by 2030',
        },
      },
      upComingEvent: {
        data: [
          {
            id: 1,
            image:
              'https://res.cloudinary.com/rashot/image/upload/v1678348968/1889cc92-96f6-4b33-86b8-ff6b902a9763_ojgxcg.jpg',
            title: 'Our Scholarship Awards to Two Indigent Girls',
            content:
              ' We are pleased to support two indigent girls in their Secondary School journey.This scholarship is in partnership with Brace Up the Young Foundation fundraising initiative to sponsor 20 girls under the Edu-girls Nigeria Project.',
            timeStamp: 'October 2023',
          },
          {
            id: 2,
            image:
              'https://res.cloudinary.com/rashot/image/upload/v1678348968/1889cc92-96f6-4b33-86b8-ff6b902a9763_ojgxcg.jpg',
            title:
              'Afrograms School, Abeokuta: Project 100 School Series Navigating Life',
            content:
              'The Project Navigating Life (100 School Series), is a skill acquisition and leadership training session for young people to prepare them for the opportunities and challenges of the new digitalized world.',
            timeStamp: 'March 2022',
          },
          {
            id: 3,
            image:
              'https://res.cloudinary.com/rashot/image/upload/v1678348607/5418bce6-e0fa-42b9-b756-70f868b83efa_patry4.jpg',
            title: 'Bondel School Ojo: Menstrual Hygiene Sensitization Program',
            content:
              'Menstrual Hygiene Sensitization Program for Girls and Teachers of Bondel School, Ojo',
            timeStamp: 'May 2022',
          },
          {
            id: 4,
            image:
              'https://res.cloudinary.com/rashot/image/upload/v1678348971/IMG_2324_idaxek.jpg',
            title: 'Financial Literacy Workshop for Women and Girls',
            content:
              'We hosted a Financial Literacy Workshop for women and girls to acquire the knowledge they require to help them make meaningful financial decisions',
            timeStamp: '26th October, 2023',
          },
          {
            id: 5,
            image:
              'https://res.cloudinary.com/rashot/image/upload/v1678348607/5418bce6-e0fa-42b9-b756-70f868b83efa_patry4.jpg',
            title:
              'Oyewole Ageege Secondary School, Lagos: Project 100 School Series Navigating Life',
            content:
              ' The Project Navigating Life (100 School Series), is a skill acquisition and leadership training session for young people to prepare them for the opportunities and challenges of the new digitalized world',
            timeStamp: 'April 2023',
          },
        ],
        title: 'Upcoming Events',
        subTitle: 'Get Involved',
      },
      causesScrollData: {
        data: [
          {
            id: 1,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
            title: 'Leadership Skills for Women & Girls',
            total: '50000',
            raised: '25000',
            content:
              'Leadership has no Gender. Women and girls need to be equally represented in decision-making position',
          },
          {
            id: 2,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678089210/Copy_of_IMG_1572_lohyq8.jpg',
            title: 'Girls Education',
            total: '75000',
            raised: '40000',
            content:
              'Knowledge is Power. Education is not a privilege. It is a basic human right for women and girls',
          },
          {
            id: 3,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
            title: 'Girls in Tech',
            total: '75000',
            raised: '40000',
            content:
              'We need to break all barriers hindering Women and girls from pursuing careers in STEM for a more dev',
          },
          {
            id: 4,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078057/C09662A8-F55F-46FE-8B22-A74ADB1AA304_cmcp6i.jpg',
            title: 'Women & Girls Economic Empowerment',
            total: '75000',
            raised: '40000',
            content:
              'Economic Independence Improves the Agency of Women and Girls',
          },
          {
            id: 5,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678089210/Copy_of_IMG_1572_lohyq8.jpg',
            title: 'Women in Politics',
            total: '75000',
            raised: '40000',
            content:
              'Many factors hinder women from participating in Politics. We must break these barriers for an event',
          },
          {
            id: 6,
            pics: 'https://res.cloudinary.com/rashot/image/upload/v1678078067/26FA5F0B-E1E6-4F1B-94AA-4D34378B5245_yepkjc.jpg',
            title: 'Girls Mentoring Community',
            total: '75000',
            raised: '40000',
            content:
              'We are building cycles and networks for women and girls to learn and grow together.',
          },
        ],
        title: 'Our Thematic Areas',
        subTitle: 'Some Major Courses',
      },
      testimonialCards: {
        data: [
          {
            id: 1,
            name: 'Olubiyi Mariam Olaide',
            image:
              'https://th.bing.com/th/id/OIF.AsqfJexNWltiDvXcSySn0w?w=188&amp;h=188&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7" ',
            content:
              'By volunteering with the Girls 4 Leadership Initiative, I have learned a lot, I have met people with beautiful minds and it’s a plus for me based on experiences.',
            workPosition: 'Volunteer',
          },
          {
            id: 2,
            name: 'Mrs Durojaye',
            image:
              'https://th.bing.com/th/id/OIP.LVLk6PHXBSU_6XG5qoqxGQHaIm?w=166&amp;h=194&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7',
            content:
              'Coming to our school and teaching our students and teachers about menstrual hygiene was eye-opening for us. Thank you Girls 4 Leadership Initiative.',
            workPosition: 'Teacher, Bondel School Ojo',
          },
          {
            id: 3,
            name: 'Rasheed Akanni',
            image:
              'https://media.licdn.com/dms/image/D4D03AQE6ABLmadcXow/profile-displayphoto-shrink_400_400/0/1714564120437?e=1724284800&v=beta&t=RG2kQZ1zzrlEF0T_UcEt0ZP0s8Lfv67YDZpHl8G7ZVI',
            content:
              'Just by being a part of this initiative I have been so empowered with both soft skills and hard skills to create impacts in my local community.',
            workPosition: 'Volunteer',
          },
          {
            id: 4,
            name: 'Itunu',
            image:
              'https://media.licdn.com/dms/image/D4D03AQGZKKjos3S1SQ/profile-displayphoto-shrink_400_400/0/1693060798760?e=1724284800&v=beta&t=XJ6purnQcDZMpk6NfsKaf-GFPQb3I57vc8rhh-_Mg1o',
            content:
              'I had a lot of fun speaking with the girls about menstrual hygiene. I am happy to be a part of this.Thank you Girls 4 Leadership Initiative.',
            workPosition: 'Sensitization Facilitator/Doctor',
          },
        ],
        title: 'Voices of Our Community',
        subTitle: 'What They Are Saying',
      },
      keyfeatures: {
        title: 'Our Empowerment Agenda',
        features: [
          {
            title: 'INCREASING THE AGENCY OF WOMEN AND GIRLS',
            subtitle:
              'Building Mentorship Cycles and Networks for Women and Girls to thrive',
          },
          {
            title: 'KNOWLEDGE AS A CATALYST FOR CHANGE',
            subtitle:
              'Increasing Awareness on how Gender Inequality hinders Development',
          },
          {
            title: 'INSPIRING CONFIDENCE AND ACCESS TO OPPORTUNITIES',
            subtitle:
              'Promoting Girls and Women Education and social, physical and mental wellbeing',
          },
        ],
        subTitle:
          'Discover the essence of our commitment to uplifting and supporting women through the core pillars of Activities',
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
  return {
    props: { homeData: data as DataType },
  };
};
export default HomePage;
