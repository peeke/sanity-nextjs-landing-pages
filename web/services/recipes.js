import groq from "groq";
import client from "client";

export function getRecipes() {
  const query = groq`*[_type == $type && !(_id in path("drafts.**"))]{
    title,
    "slug": slug.current,
  }`;
  return client.fetch(query, { type: "recipe" });
}

// export function getTags() {}

const recipeDetail = `{
  title,
  description,
  hero,
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
  steps
}`;

export function getRecipeDetailBySlug(slug) {
  const query = groq`*[_type == $type && slug.current == $slug][0]${recipeDetail}`;
  return client.fetch(query, { type: "recipe", slug });
}

export function getRecipeDetailById(id) {
  const query = groq`*[_id == $id][0]${recipeDetail}`;
  return client.fetch(query, { id });
}
