import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import PostsTest from 'components/PostsTest';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <PostsTest />
      <hr />
    </Layout>
  );
};

export default IndexPage;
