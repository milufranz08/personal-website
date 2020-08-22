import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
      allDevArticles(limit: 10) {
        edges {
          node {
            article {
              id
              url
              title
              published_at(formatString: "MM-DD-YYYY")
              description
              tags
              cover_image 
            }
          }
        }
      }
    }
  `)
    return data.allDevArticles.edges.map(post => ({
        id: post.node.article.id,
        url: post.node.article.url,
        title: post.node.article.title,
        date: post.node.article.published_at,
        description: post.node.article.description,
        tags: post.node.article.tags,
        cover: post.node.article.cover_image,
    }))
}

export default usePosts