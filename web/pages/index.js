import React, { Component } from "react";
import Link from "next/link";
import groq from "groq";

import Layout from "components/Layout";
import client from "client";

const pageQuery = groq`
*[_type == "recipe"]{...}
`;

class Home extends Component {
  static async getInitialProps() {
    return {
      recipes: await client.fetch(pageQuery)
    };
  }

  render() {
    const { recipes } = this.props;

    return (
      <Layout>
        <h1>Recipes</h1>
        {recipes.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href="/recipe/[slug]" as={"/recipe/" + slug.current}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </Layout>
    );
  }
}

export default Home;
