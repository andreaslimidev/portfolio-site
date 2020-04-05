import React from "react";
import Layout from "../layouts/layout";
import { graphql } from "gatsby";
import styled from 'styled-components'


const Content = styled.div`
margin-bottom: 3rem;
overflow: auto;
`

const Container = styled.div`
  overflow-y: scroll;
`

export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark (
    fields:{
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date
    }
    html
  }
} 
`;

const Post = ({ data }) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", data)
  const post = data.markdownRemark


  return (
  <Layout>
    <Container>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <Content dangerouslySetInnerHTML={{__html: post.html }}></Content>
    </Container>
  </Layout>
  )}

export default Post