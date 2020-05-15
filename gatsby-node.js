const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// this should be shared from `./src/utils` but the disparate module types is proving annoying.

const getUniqueTagsFromPosts = (posts) => [
  ...new Set(
    posts
      .map(({ tags }) => tags)
      .flat()
      .filter((tag) => tag !== null)
  ),
];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsPost {
          nodes {
            tags
            title
            tags
            slug
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        });
      });
      result.data.allDatoCmsPost.nodes.map((post) => {
        createPage({
          path: `posts/${post.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.slug,
          },
        });
      });

      getUniqueTagsFromPosts(result.data.allDatoCmsPost.nodes).map((tag) => {
        createPage({
          path: `tags/${tag}`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag,
          },
        });
      });
      resolve();
    });
  });
};
