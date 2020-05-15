import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import { formatDate } from "../utils";

const TagPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <article className="sheet">
        <div className="sheet__inner">
          <h1 className="sheet__title">{pageContext.tag}</h1>
          <h3>
            <Link to="/tags">{"< All Tags"}</Link>
          </h3>
          <br />
          {data.allDatoCmsPost.nodes.map((post) => (
            <React.Fragment key={post.slug}>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>{" "}
              <span className="post-date">{formatDate(post.date)}</span>
              <div>{post.contentNode.childMarkdownRemark.excerpt} </div>
            </React.Fragment>
          ))}
        </div>
      </article>
    </Layout>
  );
};
export default TagPage;

export const query = graphql`
  query TagQuery($tag: [JSON]) {
    allDatoCmsPost(filter: { tags: { in: $tag } }) {
      nodes {
        slug
        contentNode {
          childMarkdownRemark {
            excerpt
          }
        }
        title
      }
    }
  }
`;
