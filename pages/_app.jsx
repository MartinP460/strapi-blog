/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#E6E0D4] text-neutral-700">
      <Layout hideNavbarLogo>
        <main className="container mx-auto max-w-6xl px-8">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

export default MyApp;
