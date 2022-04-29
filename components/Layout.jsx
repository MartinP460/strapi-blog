import propTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
function Layout({ hideNavbarLogo, children }) {
  return (
    <>
      <NavBar hideLogo={hideNavbarLogo} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  hideNavbarLogo: propTypes.bool,
};

Layout.defaultProps = {
  hideNavbarLogo: false,
};
