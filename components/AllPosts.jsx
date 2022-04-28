/* eslint-disable react/prop-types */
import Preview from './Preview';

function AllPosts({ posts }) {
  const renderPostsPreview = () => {
    if (posts.length === 0) return [];
    return posts.map((post) => <Preview post={post} key={post.id} />);
  };

  return (
    <>
      <h2 className="text-4xl font-bold mt-8">Latest posts</h2>
      {renderPostsPreview()}
    </>
  );
}

export default AllPosts;
