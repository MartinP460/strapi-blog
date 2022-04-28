/* eslint-disable react/prop-types */
import axios from 'axios';
import MarkdownIt from 'markdown-it/lib';
import qs from 'qs';
import Image from 'next/image';

function Post({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  return (
    <article>
      <header>
        <h1 className="text-5xl">{post.attributes.title}</h1>
        <h2 className="text-xl mt-8">{post.attributes.description}</h2>
        <Image
          src={`http://localhost:1337${post.attributes.headerImage.data.attributes.url}`}
          alt={post.attributes.headerImage.data.attributes.alternativeText}
          width={800}
          height={500}
        />
        <div>
          <Image
            src={`http://localhost:1337${post.attributes.author.data.attributes.image.data.attributes.url}`}
            alt={
              post.attributes.author.data.attributes.image.data.attributes
                .alternativeText
            }
            width={40}
            height={40}
          />
          <p>{post.attributes.author.data.attributes.name}</p>
          <p>{post.attributes.author.data.attributes.position}</p>
        </div>
      </header>
      <article
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-md mx-auto mt-8"
      />
    </article>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const query = qs.stringify(
    {
      populate: {
        headerImage: '*',
        author: {
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const postRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}?${query}`,
  );

  return {
    props: {
      post: postRes.data.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await axios.get('http://localhost:1337/api/posts');

  const paths = postsRes.data.data.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
