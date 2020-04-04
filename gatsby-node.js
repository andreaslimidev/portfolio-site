const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    console.log("HELOOOOOOOOOOOOOO", slug);

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
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
};
