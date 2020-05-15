import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { timeParse, timeFormat } from "d3-time-format";

import { getUniqueTagsFromPosts } from "../utils";
const format = (date) => timeFormat("%b %e, %Y")(timeParse("%Y-%m-%d")(date));
const TagsPage = ({ data }) => {
  const uniqueTags = getUniqueTagsFromPosts(data.allDatoCmsPost.nodes);
  return (
    <Layout>
      <article className="sheet">
        <div className="sheet__inner">
          <h1 className="sheet__title">Tags</h1>
          <ul>
            {uniqueTags.map((tag) => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
};


export default TagsPage;

export const query = graphql`
  {
    allDatoCmsPost {
      nodes {
        tags
      }
    }
  }
`;
