import React from 'react'
import PropTypes from 'prop-types'
import useAllPosts from '../../hooks/useAllPosts'
// import Img from 'gatsby-image';
// import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

// Individual Post
const Post = ({ keyId, title, date, url, description, tags, cover }) => (
    <Styled.Post key={keyId}>
      <a href={url} target="_blank" rel="noopener noreferrer">
    {/* <Link to={url}> */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <Styled.Card>
          <Styled.Image>
            {/* <Img src={cover} alt={title} /> */}
            <img src={cover} alt={title}/>
          </Styled.Image>
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
    {/* </Link> */}
    </a>
  </Styled.Post>
)

Post.propTypes = {
    keyId: PropTypes.number,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

// All Posts
const Posts = () => {
    const posts = useAllPosts()

    return (
        <Container section>
            <TitleSection title="blog" subtitle="My latest posts" center />
            <Styled.Posts>           
                {posts.map(post => (
                    <Post
                        key={post.id}
                        keyId={post.id}
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