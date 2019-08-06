import React, { Component } from "react";
import Link from "next/link";
import Layout from "components/Layout";
import { getRecipesInCategory } from "services/recipes";

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    return {
      recipes: await getRecipesInCategory(slug)
    };
  }

  static defaultProps = {
    description: "No description",
    recipes: []
  };

  render() {
    const { recipes } = this.props;

    return (
      <Layout>
        <h1>Categories</h1>
        {recipes.length ? (
          <ul>
            {recipes.map(recipe => (
              <li>
                <Link href="/recipe/[slug]" as={`/recipe/${recipe.slug}`}>
                  <a>{recipe.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No dishes here :'(</p>
        )}
      </Layout>
    );
  }
}

export default Recipe;
