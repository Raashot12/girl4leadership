import Register from 'components/Authentication/Register';
import React from 'react';
import { Layout } from 'components/Layout/Layout';
import { useSession } from 'next-auth/react';

const RegisterPage = () => {
  // const { data, status } = useSession();
  const session = useSession();
  console.log(session);
  return (
    <Layout pageTitle="Sign up">
      <Register />
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   // const session = await getServerSession(context.req, context.res, authOptions);
//   const session = await getSession();
//   console.log(session);

//   return {
//     props: {},
//   };
// };
export default RegisterPage;
