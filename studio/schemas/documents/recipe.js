export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => [
        Rule.required()
      ],
      options: {
        source: 'title'
      }
    },
    {
      name: 'duration',
      type: 'object',
      title: 'Preparation time',
      description: 'How long does it take to prepare?',
      fields: [
        { type: 'number', title: 'Time preparing', name: 'preperationTime' },
        { type: 'number', title: 'Time waiting', name: 'waitingTime' }
      ]
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Description',
      description: "Describe the recipe with all the flair you've got."
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      options: {
        sortable: true,
        editModal: 'popover'
      },
      of: [
        {
          name: 'ingredient',
          title: 'Ingredient',
          type: 'recipeIngredient',
          description: 'What goes into your dish'
        }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      options: {
        layout: 'tags'
      },
      of: [
        { type: 'string' }
      ]
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Preparation steps',
      options: {
        editModal: 'popover'
      },
      of: [
        {
          name: 'recipeStep',
          title: 'Preperation step',
          type: 'textSection'
        }
      ]
    }
  ]
}
