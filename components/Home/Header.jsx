import propTypes from 'prop-types';

function Header({ featuredPost }) {
  return (
    <header>
      <h1 className="hidden text-8xl font-light text-black md:inline">Another Blog.</h1>
      {featuredPost}
    </header>
  );
}

export default Header;

Header.propTypes = {
  featuredPost: propTypes.element.isRequired,
};
