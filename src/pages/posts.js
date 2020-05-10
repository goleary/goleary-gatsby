import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { timeParse, timeFormat } from "d3-time-format";

const format = (date) => timeFormat("%b %e, %Y")(timeParse("%Y-%m-%d")(date));
const PostsPage = ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">Posts</h1>
        {data.allDatoCmsPost.nodes.map((post) => (
          <>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>{" "}
            <span className="post-date">{format(post.date)}</span>
            <div>{post.contentNode.childMarkdownRemark.excerpt} </div>
          </>
        ))}
      </div>
    </article>
  </Layout>
);

export default PostsPage;

export const query = graphql`
  {
    allDatoCmsPost(filter: { published: { eq: true } }) {
      nodes {
        title
        date
        tags
        slug
        contentNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`;
