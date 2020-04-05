const path = require("path");


/* Fetch blogposts and add slug field to each one */
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  
  /* Fetch projects and create pages for each one */ 
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  if (result.error) {
    reporter.panic("Something went wrong loading projects.");
    return;
  }

  const projects = result.data.allProjectsJson.edges;
  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    });
  });


  /* Fetch blog posts and create pages for each one */
  const postData = await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          } 
        }
      }
    }
  }
  `)

  if(postData.error) {
    reporter.panic("Something went wrong loading posts.")
    return;
  }

  const posts = postData.data.allMarkdownRemark.edges; 
  posts.forEach(({node : { fields : { slug }}}) => {
      actions.createPage({
        path: `/blog/${slug}/`, 
        component: require.resolve("./src/templates/post.js"), 
        context: slug
      })
  })
  
};
