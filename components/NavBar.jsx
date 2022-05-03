import Link from 'next/link';
import propTypes from 'prop-types';

function NavBar({ hideLogo }) {
  return (
    <nav className="flex justify-between h-28 container mx-auto max-w-6xl px-4">
      <Link href="/">
        <button className={`font-light text-2xl ${hideLogo ? 'sm:invisible text-3xl' : ''}`} type="button">Great blog.</button>
      </Link>
      <Link href="/posts">
        <button className="hover:underline" type="button">All posts</button>
      </Link>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  hideLogo: propTypes.bool,
};

NavBar.defaultProps = {
  hideLogo: false,
};
