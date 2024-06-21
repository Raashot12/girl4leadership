import AboutUs from 'components/AboutUs/AboutUs';
import { Layout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import { AboutUsType } from 'types/merchSection';

type AboutUsProps = {
  about: AboutUsType;
};
const AboutPage: React.FC<AboutUsProps> = ({ about }) => {
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
      'We are an inspiring Non Governmental Organization dedicated to empowering girls and women by increasing their leadership skills.<br><br>Our mission is to inspire a generation of female leaders through impactful projects and advocacy programs. We firmly believe in creating an equal world that not only recognizes but actively encourages girls to become leaders and influential decision-makers.<br><br>We offer leadership training workshops, mentoring programs, and networking opportunities to help girls and women build their knowledge, skills, and connections.<br><br>Our programs cover a wide range of domains, including <b style="font-weight:bold">education, entrepreneurship, science, technology, arts, and social activism.</b>',
    summary: {
      title: 'Summary',
      content:
        'We work on projects and programs that are targetted at addressing the challenges of women and girls which hinders them from maximizing their potential.Girls 4 Leadership Initiative (G4L) imbibes a culture of inclusion which allows us to engage boys and men in our programs and projects.',
    },
  };
  return {
    props: { about: aboutUsData as AboutUsType },
  };
};
export default AboutPage;
