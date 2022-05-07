/* eslint-disable react/prop-types */
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Home/Header';
import PreviewGroup from '../components/PreviewGroup';
import FeaturedPost from '../components/Home/FeaturedPost';

function Home({ posts }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Header featuredPost={<FeaturedPost post={posts.data[0]} />} />
      <div className="text-center mt-24 md:max-w-[800px] mx-auto">
        <p className="uppercase mb-20">Recent blogs</p>
        <PreviewGroup posts={posts.data.slice(1)} previews={5} />
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const query = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    },
  );

  const postsRes = await axios.get(`http://localhost:1337/api/posts?${query}`);

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
