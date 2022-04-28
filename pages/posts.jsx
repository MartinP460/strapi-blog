/* eslint-disable react/prop-types */
import axios from 'axios';
import qs from 'qs';
import AllPosts from '../components/AllPosts';

function Posts({ posts }) {
  return (
    <AllPosts posts={posts.data} />
  );
}

export default Posts;

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
