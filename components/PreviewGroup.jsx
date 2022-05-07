/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import Preview from './Preview';

function PreviewGroup({ posts, previews }) {
  const renderPostsPreview = () => {
    if (posts.length === 0) return [];
    return posts
      .slice(0, previews)
      .map((post) => <Preview post={post} key={post.id} />);
  };

  return (
    <div className="md:grid md:grid-cols-2 md:gap-16">{renderPostsPreview()}</div>
  );
}

PreviewGroup.propTypes = {
  previews: propTypes.number.isRequired,
};

export default PreviewGroup;
