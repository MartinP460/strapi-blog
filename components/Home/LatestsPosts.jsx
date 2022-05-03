/* eslint-disable react/prop-types */
import Preview from '../Preview';

function LatestPosts({ posts }) {
  const renderPostsPreview = () => {
    if (posts.length === 0) return [];
    return posts
      .slice(0, 5)
      .map((post) => <Preview post={post} key={post.id} />);
  };

  return (
    <div className="text-center mt-24 md:max-w-[800px] mx-auto">
      <p className="uppercase mb-20">Recent blogs</p>
      <div className="md:grid md:grid-cols-2 md:gap-16">{renderPostsPreview()}</div>
    </div>
  );
}

export default LatestPosts;
