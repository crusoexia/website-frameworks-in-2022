import { Link } from '@remix-run/react';
import Layout from 'shared/dist/layout/Layout';

function WrapLink({ children, href, ...props }: React.LinkHTMLAttributes<HTMLLinkElement>) {
  return (
    <Link to={href as string} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
      {children}
    </Link>
  );
}

export default function Index() {
  return (
    <Layout linkComponent={WrapLink}>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
