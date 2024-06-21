import AboutUs from 'components/AboutUs/AboutUs';
import { Layout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import { AboutUsType } from 'types/merchSection';

type AboutUsProps = {
  about: AboutUsType;
};
const AboutPage: React.FC<AboutUsProps> = ({ about }) => {
  console.log(about);
  return (
    <Layout pageTitle="Who We Are">
      <AboutUs about={about} />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/about-us`
  // );
  // const value = await res.json();
  const aboutUsData: AboutUsType = {
    content:
      'Welcome to our company! We are a leading provider of innovative software solutions for businesses of all sizes. Our mission is to empower our clients with cutting-edge technology and exceptional customer service.',
    summary: {
      title: 'About Our Company',
      content:
        'Established in 2010, we have grown from a small startup to a renowned name in the industry. Our team of highly skilled professionals is dedicated to delivering top-notch products and services that meet the unique needs of our clients. We pride ourselves on our commitment to excellence, integrity, and customer satisfaction.',
    },
  };
  return {
    props: { about: aboutUsData as AboutUsType },
  };
};
export default AboutPage;
