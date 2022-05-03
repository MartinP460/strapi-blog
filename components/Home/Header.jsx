import propTypes from 'prop-types';

function Header({ featuredPost }) {
  return (
    <header>
      <h1 className="hidden sm:inline text-8xl font-light">Great Blog.</h1>
      {featuredPost}
    </header>
  );
}

export default Header;

Header.propTypes = {
  featuredPost: propTypes.element.isRequired,
};
