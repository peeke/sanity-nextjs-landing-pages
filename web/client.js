import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "zt498y7i",
  dataset: "production",
  token: process.browser
    ? null
    : "skTTTmt5OgamlDw6ySoOHvQ1ujPUB65xdR95bjiyCh0JSBiVwKAhByfUubpTmcWyJ7HcRc26dFoDe4EIGUk89e6pIx19DM5TitJXg5dETWLAGKrgHjN5EHgHkPDIztGtKLGkAotS9ZMzCcIo0OUn0QZtwMVGDIyxxuxybh9N8ak66TnZcPG2",
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true
});
