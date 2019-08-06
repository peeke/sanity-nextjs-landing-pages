import React, { Component } from "react";
import Link from "next/link";
import Layout from "components/Layout";
import { getRecipeCategories } from "services/recipes";

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    return {
      categories: await getRecipeCategories(slug)
    };
  }

  static defaultProps = {
    description: "No description",
    categories: []
  };

  render() {
    const { categories } = this.props;
    console.log(categories);

    return (
      <Layout>
        <h1>Categories</h1>
        <ul>
          {categories.map(category => (
            <li>
              <Link href="/recipe/category/[slug]" as={`/recipe/category/${category}`}>
                <a>{category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default Recipe;
