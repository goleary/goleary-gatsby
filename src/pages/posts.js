import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

import { formatDate } from "../utils";
import styles from "./posts.module.scss";
const PostsPage = ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">Posts</h1>
        {data.allDatoCmsPost.nodes.map(
          ({ title, slug, date, contentNode, tags }) => (
            <>
              <Link to={`/posts/${slug}`}>{title}</Link>{" "}
              <span className="post-date">{formatDate(date)}</span>
              <div>{contentNode.childMarkdownRemark.excerpt} </div>
              <div className={styles.tagContainer}>
                {tags && (
                  <>
                    tags:{" "}
                    {tags.map((tag, i) => (
                      <>
                        <Link to={`/tags/${tag}`}>{tag}</Link>
                        {i < tags.length - 1 && ", "}
                      </>
                    ))}
                  </>
                )}
              </div>
            </>
          )
        )}
      </div>
    </article>
  </Layout>
);

export default PostsPage;

// filter to use on prod version of the site:
// allDatoCmsPost(filter: { published: { eq: true } }) {

export const query = graphql`
  {
    allDatoCmsPost {
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
