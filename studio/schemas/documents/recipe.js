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
      validation: Rule => [Rule.required()],
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
        {
          type: 'number',
          title: 'Time preparing',
          name: 'preperationTime',
          validation: Rule => [Rule.required()]
        },
        {
          type: 'number',
          title: 'Time waiting',
          name: 'waitingTime',
          validation: Rule => [Rule.required()]
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'description',
      type: 'portableTextSimple',
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
      of: [{ type: 'string' }]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Type',
      options: {
        list: [
          { value: 'default', title: 'Regular' },
          { value: 'vegetarian', title: 'Vegetarian' },
          { value: 'vegan', title: 'Vegan' }
        ]
      },
      of: [{ type: 'string' }]
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Preparation steps',
      options: {
        sortable: true,
        editModal: 'popover'
      },
      of: [{ type: 'portableText' }]
    }
  ]
}
