import propTypes from 'prop-types';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
function Layout({
  title, description, hideNavbarLogo, children,
}) {
  return (
    <>
      <Head>
        <title>{`${title} | Another blog`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <NavBar hideLogo={hideNavbarLogo} />
      <main className="container mx-auto max-w-6xl px-4 sm:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  hideNavbarLogo: propTypes.bool,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

Layout.defaultProps = {
  description: null,
  hideNavbarLogo: false,
};
