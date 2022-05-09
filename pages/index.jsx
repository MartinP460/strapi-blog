/* eslint-disable react/prop-types */
import Layout from '../components/UI/Layout';
import Header from '../components/Home/Header';
import PreviewGroup from '../components/UI/PreviewGroup';
import FeaturedPost from '../components/Home/FeaturedPost';
import blogService from '../utils/blogService';

function Home({ posts }) {
  return (
    <Layout title="Home" description="A Great Blog with some great blogs." hideNavbarLogo>
      <div className="max-w-5xl mx-auto">
        <Header featuredPost={<FeaturedPost post={posts[0]} />} />
        <div className="text-center mt-24 md:max-w-[800px] mx-auto">
          <p className="uppercase mb-20">Recent blogs</p>
          <PreviewGroup posts={posts.slice(1)} previews={5} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  const blogs = await blogService.getFeaturedAndPreviews();

  return {
    props: {
      posts: blogs,
    },
  };
}
