export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'duration',
      type: 'object',
      title: 'Preparation time',
      description: 'How long does it take to prepare?',
      fields: [
        { type: 'number', title: 'Time preparing', name: 'preparationTime' },
        { type: 'number', title: 'Time waiting', name: 'waitingTime' },
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe the recipe with all the flair you\'ve got.',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [
        {
          name: 'ingredient',
          title: 'Ingredient',
          type: 'recipeIngredient',
          description: 'What goes into your dish'
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Preparation steps',
      of: [
        {
          name: 'recipeStep',
          title: 'Preperation step',
          type: 'textSection',
        }
      ],
    },
  ]
};
