import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Layout from 'shared/dist/layout/Layout';
import 'shared/dist/styles/global.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {;
  // Use the layout defined at the page level, if available;
  const getLayout = Component.getLayout ?? ((page) => {
    return (
      <Layout 
        linkComponent={Link as React.ComponentType<React.LinkHTMLAttributes<HTMLLinkElement>>}>
        {page}
      </Layout>
    );
  });

  return getLayout(<Component {...pageProps} />);
}
