import Galleries from 'components/Gallery/Galleries';
import { Layout } from 'components/Layout/Layout';
import React from 'react';

const gallery = () => {
  return (
    <Layout pageTitle="Gallery">
      <Galleries />
    </Layout>
  );
};

export default gallery;
