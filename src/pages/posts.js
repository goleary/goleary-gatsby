import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

import styles from "./posts.module.scss";
import { formatDate } from "../utils";

const PostsPage = ({ data }) => {
  return (
    <Layout>
      <article className="sheet">
        <div className="sheet__inner">
          <h1 className="sheet__title">Posts</h1>
          <span>
            Various ramblings on technologies I've used, experiences I've had
            and things I've built.
          </span>
          {data.allDatoCmsPost.nodes.map((post) => (
            <div className={styles.post}>
              <h2 className={styles.postTitle}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <span className="post-date">
                {post.date && formatDate(post.date)}
              </span>
              <div>{post.contentNode.childMarkdownRemark.excerpt} </div>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default PostsPage;

// dev query
/*
export const query = graphql`
  {
    allDatoCmsPost(sort: { fields: date, order: DESC }) {
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
*/
// prod query
export const query = graphql`
  {
    allDatoCmsPost(
      sort: { fields: date, order: DESC }
      filter: { published: { eq: true } }
    ) {
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
