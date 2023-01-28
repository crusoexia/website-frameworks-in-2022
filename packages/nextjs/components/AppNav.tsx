import Link from 'next/link';

const AppNav = () => {
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
