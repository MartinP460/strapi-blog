import axios from 'axios';
import qs from 'qs';

const defineQuery = (fields, populate) => {
  const query = qs.stringify(
    {
      fields,
      populate,
    },
    {
      encodeValuesOnly: true,
    },
  );

  return query;
};

const getPreviews = async () => {
  const query = defineQuery(
    ['title', 'description', 'publishedAt'],
    { headerImage: '*' },
  );

  const blogs = await axios.get(`http://localhost:1337/api/posts?${query}`);

  return blogs.data.data;
};

const getFeaturedAndPreviews = async () => {
  const query = defineQuery(
    ['title', 'description', 'publishedAt', 'introduction'],
    { headerImage: '*' },
  );

  const blogs = await axios.get(`http://localhost:1337/api/posts?${query}`);

  return blogs.data.data;
};

const getIds = async () => {
  const query = defineQuery(['id']);

  const blog = await axios.get(
    `http://localhost:1337/api/posts?${query}`,
  );

  return blog.data.data;
};

const getBlog = async (id) => {
  const query = defineQuery(
    ['title', 'description', 'publishedAt', 'content'],
    { headerImage: '*', author: { populate: '*' } },
  );

  const blog = await axios.get(
    `http://localhost:1337/api/posts/${id}?${query}`,
  );

  return blog.data.data;
};

export default {
  getPreviews, getFeaturedAndPreviews, getIds, getBlog,
};
