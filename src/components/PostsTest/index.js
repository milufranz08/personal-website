import React from 'react'
import PropTypes from 'prop-types'
import usePosts from '../../hooks/usePosts'
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

// Individual Post
const Post = ({ key, title, date, url, description, tags, cover }) => (
    <Styled.Post key={key}>
    <Link to={url}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <Styled.Card>
          {/* <Styled.Image>
            <Img src={cover} alt={title} />
          </Styled.Image> */}
          <Styled.Content>
            <Styled.Date>{date}</Styled.Date>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.Content>
          <Styled.Tags>
            {tags.map((item) => (
              <Styled.Tag key={item}>{item}</Styled.Tag>
            ))}
          </Styled.Tags>
        </Styled.Card>
      </motion.div>
    </Link>
  </Styled.Post>
)

Post.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

// All Posts
const Posts = () => {
    const posts = usePosts()

    console.log({posts});

    return (
        <Container section>
            <TitleSection title="blog" subtitle="My latest posts" center />
            <Styled.Posts>           
                {posts.map(post => (
                    <Post
                        key={post.id}
                        title={post.title}
                        date={post.date}
                        url={post.url}
                        description={post.description}
                        tags={post.tags}
                        cover={post.cover}
                    />
                ))}
            </Styled.Posts>
        </Container>
    )
}

export default Posts