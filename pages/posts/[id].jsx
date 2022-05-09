/* eslint-disable react/prop-types */
import MarkdownIt from 'markdown-it/lib';
import Layout from '../../components/UI/Layout';
import Header from '../../components/Posts/Header';
import ShareButtonGroup from '../../components/Posts/ShareButtonGroup';
import PreviewGroup from '../../components/UI/PreviewGroup';
import blogService from '../../utils/blogService';

function Post({ post, previews }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  const nonCurrentPreviews = previews
    .filter((preview) => !(preview.attributes.title === post.attributes.title));

  return (
    <Layout title={post.attributes.title} description={post.attributes.description}>
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
    </Layout>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const post = await blogService.getBlog(params.id);

  const previews = await blogService.getPreviews();

  return {
    props: {
      post,
      previews,
    },
  };
}

export async function getStaticPaths() {
  const posts = await blogService.getIds();

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
