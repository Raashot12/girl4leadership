import Signin from 'components/Authentication/Signin';
import { Layout } from 'components/Layout/Layout';
import React from 'react';

const SigninPage = () => {
  return (
    <Layout pageTitle="Sign in">
      <Signin />
    </Layout>
  );
};

export default SigninPage;
