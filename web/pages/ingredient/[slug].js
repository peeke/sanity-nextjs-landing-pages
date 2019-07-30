import React, { Component } from "react";
import groq from "groq";
import client from "client";
import Layout from "components/Layout";
import SimpleBlockContent from "components/SimpleBlockContent";

const pageQuery = groq`
*[_type == $type && slug.current == $slug][0]{
  title,
  description
}
`;

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    return client.fetch(pageQuery, { type: "ingredient", slug });
  }

  static defaultProps = {
    description: "No description"
  };

  render() {
    const { title, description } = this.props;

    return (
      <Layout>
        <h1>{title}</h1>
        <SimpleBlockContent blocks={description} />
      </Layout>
    );
  }
}

export default Recipe;
