import React from 'react';
import AppNav from '../components/AppNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="app">
      <nav id="app_nav">
        <AppNav />
      </nav>
      <main id="app_main">{children}</main>
    </div>
  );
}

export default Layout;
