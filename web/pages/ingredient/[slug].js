import React, { Component } from "react";
import Layout from "components/Layout";
import SimpleBlockContent from "components/SimpleBlockContent";
import { getIngredientDetailBySlug, getIngredientDetailById } from "services/ingredients";

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    return slug.startsWith("drafts.")
      ? getIngredientDetailById(slug)
      : getIngredientDetailBySlug(slug);
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
