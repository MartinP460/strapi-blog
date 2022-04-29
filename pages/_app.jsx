/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#E6E0D4]">
      <div className="max-w-6xl mx-auto">
        <Layout hideNavbarLogo>
          <main className="container mx-auto">
            <Component {...pageProps} />
          </main>
        </Layout>
      </div>
    </div>
  );
}

// "next/core-web-vitals"

export default MyApp;
