/* eslint-disable react/prop-types */
import axios from 'axios';
import MarkdownIt from 'markdown-it/lib';
import qs from 'qs';
import Header from '../../components/Posts/Header';
import ShareButtonGroup from '../../components/Posts/ShareButtonGroup';
import PreviewGroup from '../../components/PreviewGroup';

function Post({ post, previews }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  const nonCurrentPreviews = previews
    .filter((preview) => !(preview.attributes.title === post.attributes.title));

  return (
    <>
      <article className="mt-4">
        <Header post={post} />
        <article
        // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose prose-md mx-auto mt-10"
        />
      </article>
      <div className="max-w-[800px] mx-auto">
        <ShareButtonGroup />
        <div className="w-2/3 h-0.5 bg-neutral-400 mx-auto mt-8 md:w-full" />
        <section className="mt-16">
          <p className="text-xl text-center md:mb-16">You may also like...</p>
          <PreviewGroup
            posts={nonCurrentPreviews}
            previews={2}
          />
        </section>
      </div>
    </>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const postQuery = qs.stringify(
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
    `http://localhost:1337/api/posts/${params.id}?${postQuery}`,
  );

  const previewQuery = qs.stringify({
    fields: ['title', 'description', 'publishedAt'],
    populate: {
      headerImage: '*',
    },
  }, {
    encodeValuesOnly: true,
  });

  const previewRes = await axios.get(
    `http://localhost:1337/api/posts?${previewQuery}`,
  );

  return {
    props: {
      post: postRes.data.data,
      previews: previewRes.data.data,
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
