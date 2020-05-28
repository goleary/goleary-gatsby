import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

import { getUniqueTagsFromPosts, getTagCounts } from "../../utils";
const WorkTagsPage = ({ data }) => {
  const tagCounts = getTagCounts(data.allDatoCmsWork.nodes);
  let tags = Object.keys(tagCounts)
    .map((tag) => ({
      tag,
      count: tagCounts[tag],
    }))
    .sort((a, b) => b.count - a.count);
  return (
    <Layout>
      <article className="sheet">
        <div className="sheet__inner">
          <h1 className="sheet__title">Tags</h1>
          <ul>
            {tags.map(({ tag, count }) => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>({count})
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default WorkTagsPage;

export const query = graphql`
  {
    allDatoCmsWork {
      nodes {
        tags
      }
    }
  }
`;
