import React from 'react';
import HeaderTitle from 'components/Shared/HeaderTitle';
import NavbarMenu from '../NavigationBar/NavbarMenu';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <HeaderTitle title={pageTitle} />
      <NavbarMenu />
      {children}
      <Footer />
    </>
  );
}
