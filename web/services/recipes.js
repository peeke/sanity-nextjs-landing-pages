import groq from "groq";
import client from "client";

const recipeLink = `{
  title,
  "slug": slug.current,
}`;

export function getRecipes() {
  const query = groq`*[_type == $type && !(_id in path("drafts.**"))]${recipeLink}`;
  return client.fetch(query, { type: "recipe" });
}

// export function getTags() {}

const recipeDetail = `{
  title,
  description,
  hero,
  tags[],
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

export function getRecipesInCategory(category) {
  const query = groq`*[_type == $type && $category in categories && !(_id in path("drafts.**"))]${recipeLink}`;
  return client.fetch(query, { type: "recipe", category });
}

export function getRecipeCategories() {
  const query = groq`*[_type == $type && !(_id in path("drafts.**"))]{
    categories[]
  }`;
  return client.fetch(query, { type: "recipe" }).then(result => {
    const categories = result.reduce((result, recipe) => result.concat(recipe.categories), []);
    return Array.from(new Set(categories));
  });
}
