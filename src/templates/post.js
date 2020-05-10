import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
      <div className="sheet__gallery">
        <Img
          fluid={data.datoCmsPost.coverImage.fluid}
          style={{ margin: "auto", width: 400 }}
        />
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
    </article>
  </Layout>
);

export const query = graphql`
  query PostQuery($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
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
