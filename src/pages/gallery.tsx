import Galleries from 'components/Gallery/Galleries';
import { Layout } from 'components/Layout/Layout';
import { GetStaticProps } from 'next';
import React from 'react';
import { GalleryDataTypes } from 'types/merchSection';

type GalleryProps = {
  galleryData: GalleryDataTypes[];
};
const GalleryPage: React.FC<GalleryProps> = ({ galleryData }) => {
  return (
    <Layout pageTitle="Gallery">
      <Galleries
        galleryData={
          galleryData as unknown as {
            id: number;
            imageURL: string;
          }[]
        }
      />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_APP_API_SERVICE_BASE_URL}/api/gallery`
  // );
  // const value = await res.json();

  return {
    props: {
      galleryData: [] as GalleryDataTypes[],
    },
  };
};
export default GalleryPage;
