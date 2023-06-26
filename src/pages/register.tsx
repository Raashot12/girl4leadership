import Register from 'components/Authentication/Register';
import React from 'react';
import { useSession } from 'next-auth/react';
import { Layout } from 'components/Layout/Layout';

const RegisterPage = () => {
  // const { data, status } = useSession();

  return (
    <Layout pageTitle="Sign up">
      <Register />
    </Layout>
  );
};

export default RegisterPage;
