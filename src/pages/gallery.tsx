import Galleries from 'components/Gallery/Galleries';
import { Layout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import { GalleryDataTypes } from 'types/merchSection';

type GalleryProps = {
  galleryData: GalleryDataTypes[];
};
const GalleryPage: React.FC<GalleryProps> = () => {
  return (
    <Layout pageTitle="Gallery">
      <Galleries />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  return {
    props: {
      galleryData: [] as GalleryDataTypes[],
    },
  };
};
export default GalleryPage;
