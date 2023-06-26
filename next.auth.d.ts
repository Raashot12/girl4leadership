/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
    } & Session['user'];
  }
}
