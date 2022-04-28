/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto p-4 max-w-7xl">
        <Component {...pageProps} />
      </main>
    </>
  );
}

// "next/core-web-vitals"

export default MyApp;
