/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';
import format from 'date-fns/format';

function Preview({ post }) {
  const {
    headerImage, title, description, publishedAt,
  } = post.attributes;

  return (
    <div className="mt-20 md:mt-0 text-left">
      <Link href={`/posts/${post.id}`}>
        <a>
          <Image
            src={headerImage.data.attributes.url}
            alt={headerImage.data.attributes.alternativeText}
            width={640}
            height={473}
            objectFit="cover"
            className="rounded hover:scale-105 transition-transform"
          />
        </a>
      </Link>
      <div>
        <p className="mt-4">{format(new Date(publishedAt), "LLLL d',' yyyy")}</p>
        <Link href={`/posts/${post.id}`} passHref>
          <h3 className="text-xl font-bold mt-4 hover:underline cursor-pointer">{title}</h3>
        </Link>
        <p className="prose mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Preview;
