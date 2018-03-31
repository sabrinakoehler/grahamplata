const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve("src/templates/post.js");

  return graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 210)
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const count = result.data.allMarkdownRemark.totalCount;
    console.log(count)
    // Create pages for each markdown file.
    posts.forEach(({ node }, index) => {
      // const prev = index === 0 ? false : posts[index - 1].node;
      // const next = index === posts.length - 1 ? false : posts[index + 1].node;
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
        // context: {
        //   prev,
        //   next
        // }
      });
    });

    return posts;
  });
};
