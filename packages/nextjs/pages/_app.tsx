import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import AppNav from 'shared/components/AppNav';
import 'shared/styles/global.css';

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
      <div id="app">
        <nav id="app_nav">
          <AppNav />
        </nav>
        <main id="app_main">{page}</main>
      </div>
    );
  });

  return getLayout(<Component {...pageProps} />);
}
