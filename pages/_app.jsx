/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="bg-[#E6E0D4] text-neutral-700">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
