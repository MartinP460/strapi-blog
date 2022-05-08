/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-[#816f6638] text-center p-10 mt-16">
      <p className="text-lg mb-4">Made with Strapi and Next.js.</p>
      <Link href="https://github.com/MartinP460/strapi-blog">
        <a>
          <Image src="/images/github-mark.png" width={32} height={32} />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
