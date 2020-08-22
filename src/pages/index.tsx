import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import RecentPosts from 'components/RecentPosts';
import PostsTest from 'components/PostsTest';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <RecentPosts />
      <PostsTest />
      <hr />
    </Layout>
  );
};

export default IndexPage;
