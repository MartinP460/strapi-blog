import Link from 'next/link';
import propTypes from 'prop-types';

function NavBar({ hideLogo }) {
  return (
    <nav className="flex justify-between h-28 container mx-auto max-w-6xl px-4">
      <Link href="/" passHref>
        <button className={`font-light text-black text-2xl ${hideLogo ? 'md:invisible text-3xl' : ''}`} type="button">Another blog.</button>
      </Link>
      <Link href="/posts" passHref>
        <button className="uppercase hover:underline" type="button">All blogs</button>
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
