import AboutUs from 'components/AboutUs/AboutUs';
import { Layout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import { AboutUsType } from 'types/merchSection';

type AboutUsProps = {
  about: AboutUsType;
};
const AboutPage = () => {
  return (
    <Layout pageTitle="Who We Are">
      <AboutUs />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/about-us`
  );
  const value = await res.json();
  console.log(value);
  return {
    props: { about: value.data as AboutUsType },
  };
};
export default AboutPage;
