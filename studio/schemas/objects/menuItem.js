export default {
  title: 'Menu item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Title',
      description: 'The title displayed in the menu for this item',
      name: 'title',
      type: 'string'
    },
    {
      title: 'URL',
      name: 'href',
      type: 'internalLink'
    },
    {
      title: 'Submenu items',
      name: 'items',
      type: 'array',
      of: [{ type: 'menuItem' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'href._type',
      slug: 'href.slug.current'
    },
    prepare({ title, type, slug }) {
      return {
        title,
        subtitle: '/' + type + '/' + slug
      }
    }
  }
}
