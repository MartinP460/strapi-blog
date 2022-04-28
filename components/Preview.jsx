/* eslint-disable react/prop-types */
import Link from 'next/link';
import Image from 'next/image';

function Preview({ post }) {
  return (
    <>
      <h3 className="text-xl font-bold mt-6">{post.attributes.title}</h3>
      <p className="mt-2 mb-2">{post.attributes.description}</p>
      <Link href={`/posts/${post.id}`}>
        <button className="text-indigo-700" type="button">Read full blog &rarr;</button>
      </Link>
      <Image
        src={`http://localhost:1337${post.attributes.headerImage.data.attributes.url}`}
        alt={post.attributes.headerImage.data.attributes.alternativeText}
        width={400}
        height={400}
      />
    </>
  );
}

export default Preview;
