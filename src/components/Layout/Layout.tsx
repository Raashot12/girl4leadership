import React from 'react';
import NavbarMenu from '../NavigationBar/NavbarMenu';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavbarMenu />
      {children}
      <Footer />
    </>
  );
}
