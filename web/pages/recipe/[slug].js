import React, { Component } from "react";
import isObjectEmpty from "utils/isObjectEmpty";
import Link from "next/link";
import Layout from "components/Layout";
import SimpleBlockContent from "components/SimpleBlockContent";
import { getRecipeDetailBySlug, getRecipeDetailById } from "services/recipes";

class Recipe extends Component {
  static async getInitialProps({ query: { slug } }) {
    const published = await getRecipeDetailBySlug(slug);
    if (!isObjectEmpty(published)) return published;

    const preview = await getRecipeDetailById(slug);
    if (!isObjectEmpty(preview)) return preview;

    console.log("404!");
    return {};
  }

  static defaultProps = {
    description: "No description"
  };

  render() {
    const { title, hero, description, duration = {}, ingredients = [], steps = [] } = this.props;

    return (
      <Layout>
        <h1>{title}</h1>
        <SimpleBlockContent blocks={description.blocks} />
        <img src={hero.image} />
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
          {steps.map((step, i) => {
            return (
              <li key={i}>
                <SimpleBlockContent {...step} />
              </li>
            );
          })}
        </ol>
      </Layout>
    );
  }
}

export default Recipe;
