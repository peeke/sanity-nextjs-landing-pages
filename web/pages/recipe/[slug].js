import React, { Component } from "react";
import groq from "groq";
import client from "client";
import Link from "next/link";
import Layout from "components/Layout";
import SimpleBlockContent from "components/SimpleBlockContent";
import { getRecipeDetailBySlug, getRecipeDetailById } from "services/recipes";

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    return slug.startsWith("drafts.") ? getRecipeDetailById(slug) : getRecipeDetailBySlug(slug);
  }

  static defaultProps = {
    description: "No description"
  };

  render() {
    const { title, description, duration = {}, ingredients = [], steps = [] } = this.props;

    return (
      <Layout>
        <h1>{title}</h1>
        <SimpleBlockContent blocks={description} />
        <p>
          Preparation time: {duration.preperationTime} minutes
          <br />
          waiting time: {duration.waitingTime} minutes
        </p>

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(({ title, amount, unit, slug }, i) => (
            <li key={i}>
              <Link href={`/ingredient/[slug]`} as={`/ingredient/${slug}`}>
                <a>{title}</a>
              </Link>{" "}
              ({amount}
              {unit})
            </li>
          ))}
        </ul>

        <h2>Preparation</h2>
        <ol>
          {steps.map(({ text }, i) => (
            <li key={i}>
              <SimpleBlockContent blocks={text} />
            </li>
          ))}
        </ol>
      </Layout>
    );
  }
}

export default Recipe;
