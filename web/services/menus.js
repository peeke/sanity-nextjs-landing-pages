import groq from "groq";
import client from "client";

export const getMenu = slug => {
  const query = groq`*[_type == $type && slug.current == $slug][0]{
    items[] {
      title,
      "href": "/" + href->_type + "/" + href->slug.current,
      items[] {
        title,
        "href": "/" + href->_type + "/" + href->slug.current
      }
    }
  }`;
  return client.fetch(query, { type: "menu", slug });
};
