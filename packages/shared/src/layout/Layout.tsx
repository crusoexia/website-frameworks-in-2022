import React from 'react';
import AppNav from '../components/AppNav';

const Layout = ({ 
  children,
  linkComponent,
}: { 
  children: React.ReactNode;
  linkComponent?: React.ComponentType<React.LinkHTMLAttributes<HTMLLinkElement>>;
}) => {
  return (
    <div id="app">
      <nav id="app_nav">
        <AppNav linkComponent={linkComponent}/>
      </nav>
      <main id="app_main">{children}</main>
    </div>
  );
}

export default Layout;
