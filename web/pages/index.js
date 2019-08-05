import React, { Component } from "react";
import Link from "next/link";

import Layout from "components/Layout";

import { getRecipes } from "services/recipes";

class Home extends Component {
  static async getInitialProps() {
    return {
      recipes: await getRecipes()
    };
  }

  render() {
    const { recipes } = this.props;

    return (
      <Layout>
        <h1>Recipes</h1>
        {recipes.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href="/recipe/[slug]" as={"/recipe/" + slug}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Layout>
    );
  }
}

export default Home;
