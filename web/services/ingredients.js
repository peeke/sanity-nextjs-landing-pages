import groq from "groq";
import client from "client";

const ingredientDetail = `{
  title,
  description
}`;

export const getIngredientDetailBySlug = slug => {
  const query = groq`*[_type == $type && slug.current == $slug][0]${ingredientDetail}`;
  return client.fetch(query, { type: "ingredient", slug });
};

export const getIngredientDetailById = id => {
  const query = groq`*[_id == $id][0]${ingredientDetail}`;
  return client.fetch(query, { id });
};
