/* eslint-disable react/prop-types */
import Image from 'next/image';
import format from 'date-fns/format';

function Header({ post }) {
  const {
    publishedAt, title, description, headerImage, author,
  } = post.attributes;

  return (
    <header className="max-w-5xl mx-auto">
      <div className="text-center max-w-[800px] mx-auto md:text-left">
        <p>
          Published
          {' '}
          {format(new Date(publishedAt), "LLLL d',' yyyy")}
        </p>
        <h1 className="text-3xl font-bold text-black mt-6">{title}</h1>
        <h2 className="text-lg mt-8">{description}</h2>
      </div>
      <div className="mt-6">
        <Image
          src={`https://strapi-blog460.herokuapp.com${headerImage.data.attributes.url}`}
          alt={headerImage.data.attributes.alternativeText}
          width={1088}
          height={707}
          priority
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex mt-4 items-center max-w-[800px] mx-auto">
        <Image
          src={`https://strapi-blog460.herokuapp.com${author.data.attributes.image.data.attributes.url}`}
          alt={author.data.attributes.image.data.attributes.alternativeText}
          width={50}
          height={50}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="font-bold">{author.data.attributes.name}</p>
          <p className="text-sm">{author.data.attributes.position}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
