/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#E6E0D4] text-neutral-700">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
