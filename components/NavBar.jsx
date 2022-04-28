import Link from 'next/link';

function NavBar() {
  return (
    <nav className="container mx-auto flex justify-between p-4 max-w-7xl">
      <Link href="/">
        <button className="underline" type="button">Generic blog posts</button>
      </Link>
      <ul>
        <li>
          <Link href="/posts">
            <button className="underline" type="button">All posts</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
