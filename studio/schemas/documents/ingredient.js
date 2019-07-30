export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'portableText',
      description: "Describe the recipe with all the flair you've got."
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => [Rule.required()],
      options: {
        source: 'title'
      }
    }
  ]
}
