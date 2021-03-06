/* eslint-disable react/prop-types */
import { useState } from 'react';
import Layout from '../components/UI/Layout';
import Input from '../components/UI/Input';
import Preview from '../components/UI/Preview';
import blogService from '../utils/blogService';

function Posts({ posts }) {
  const [query, setQuery] = useState('');

  const renderPostsPreview = () => {
    if (posts.length === 0) return [];

    const searchedPosts = posts
      .filter((p) => p.attributes.title.toLowerCase().includes(query.toLowerCase()));

    return searchedPosts.length === 0
      ? <p className="mt-8 w-2/3 text-center mx-auto md:col-span-3">Hmmmm... There are no blogs matching that query.</p>
      : searchedPosts.map((post) => <Preview post={post} key={post.id} />);
  };

  return (
    <Layout title="All blogs">
      <div className="min-h-screen max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl text-black font-bold mt-8">Search all blogs</h2>
          <Input onChange={(e) => setQuery(e.target.value)} className="mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Input>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-8 md:mt-12">{renderPostsPreview()}</div>
      </div>
    </Layout>
  );
}

export default Posts;

export async function getStaticProps() {
  const blogs = await blogService.getPreviews();

  return {
    props: {
      posts: blogs,
    },
  };
}
