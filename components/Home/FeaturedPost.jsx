/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import Link from 'next/link';
import format from 'date-fns/format';

function FeaturedPost({ post }) {
  const {
    title, description, headerImage, publishedAt, introduction,
  } = post.attributes;

  return (
    <div className="mt-8 md:mt-20">
      <div className="text-center md:grid md:grid-cols-2 md:text-left">
        <div className="md:ml-12">
          <p className="uppercase">Featured blog</p>
          <Link href={`/posts/${post.id}`}>
            <a className="text-3xl font-bold mt-6 mb-4 text-black block hover:underline underline-offset-8 md:text-5xl md:leading-normal">{title}</a>
          </Link>
          <p className="hidden md:inline prose">{description}</p>
        </div>
        <div className="order-first">
          <Image
            src={headerImage.data.attributes.url}
            alt={headerImage.data.attributes.alternativeText}
            width={592}
            height={438}
            priority
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="mt-4 md:max-w-[800px] mx-auto md:mt-12">
        <p>{format(new Date(publishedAt), "LLLL d',' yyyy")}</p>
        <div className="md:max-w-[666px] mx-auto">
          <p className="prose mt-6 mb-4 text-lg leading-loose">{introduction}</p>
          <Link href={`/posts/${post.id}`}>
            <a className="text-black text-lg font-semibold hover:text-[#75232A] transition-colors">
              <p className="mr-1 hover:mr-2 inline transition-all">Continue reading</p>
              <span>&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
