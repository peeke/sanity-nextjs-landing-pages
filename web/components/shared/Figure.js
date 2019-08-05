import imageUrlBuilder from "@sanity/image-url";
import client from "client";

const builder = imageUrlBuilder(client);

export default function Figure({ asset, alt, caption }) {
  const src = builder
    .image(asset)
    .auto("format")
    .fit("crop")
    .width(500)
    .height(500)
    .url();

  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
