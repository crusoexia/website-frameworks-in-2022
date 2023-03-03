import React from 'react';

const AppNav = ({ 
  linkComponent: Link = (props: React.LinkHTMLAttributes<HTMLLinkElement>) => React.createElement('a', props),
}: { 
  linkComponent?: React.ComponentType<React.LinkHTMLAttributes<HTMLLinkElement>>;
}) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/list">List</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </ul>
  )
};

export default AppNav;
