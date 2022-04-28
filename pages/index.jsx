/* eslint-disable react/prop-types */
import axios from 'axios';
import qs from 'qs';
import Header from '../components/Home/Header';
import LatestPosts from '../components/Home/LatestsPosts';

function Home({ posts }) {
  return (
    <>
      <Header />
      <LatestPosts posts={posts.data} />
    </>
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
