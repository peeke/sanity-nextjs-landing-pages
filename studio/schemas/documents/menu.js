export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'items',
      type: 'array',
      title: 'Menu items',
      of: [
        {
          type: 'menuItem'
        }
      ]
    }
  ]
}
