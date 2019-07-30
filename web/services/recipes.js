import groq from "groq";
import client from "client";

const recipeDetail = `{
  title,
  description,
  duration {
    preperationTime,
    waitingTime
  },
  ingredients[] {
    "title": ingredient->title,
    "slug": ingredient->slug.current,
    amount,
    unit,
  },
  steps[] {
    text
  }
}`;

export const getRecipeDetailBySlug = slug => {
  const query = groq`*[_type == $type && slug.current == $slug][0]${recipeDetail}`;
  return client.fetch(query, { type: "recipe", slug });
};

export const getRecipeDetailById = id => {
  const query = groq`*[_id == $id][0]${recipeDetail}`;
  return client.fetch(query, { id });
};
