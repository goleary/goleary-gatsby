import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({ data }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: data.datoCmsPost.slug,
      title: data.datoCmsPost.title,
    },
  };
  return (
    <Layout>
      <article className="sheet">
        <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
        <div className="sheet__gallery">
          {data.datoCmsPost.coverImage && data.datoCmsPost.coverImage.fuil && (
            <Img
              fluid={data.datoCmsPost.coverImage.fluid}
              style={{ margin: "auto", width: 400 }}
            />
          )}
        </div>
        <div className="sheet__inner">
          <h1 className="sheet__title">{data.datoCmsPost.title}</h1>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPost.contentNode.childMarkdownRemark.html,
          }}
        />
        <DiscussionEmbed {...disqusConfig} />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      slug
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      coverImage {
        url
        fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      content
      tags
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
