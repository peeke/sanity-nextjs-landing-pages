export default {
  type: 'object',
  title: 'Simple Portable Text',
  name: 'portableTextSimple',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' }
            ],
            annotations: [{ type: 'link' }, { type: 'internalLink' }]
          }
        },
        { type: 'figure' }
      ]
    }
  ],
  preview: {
    select: {
      blocks: 'blocks'
    },
    prepare({ blocks = [] }) {
      const block = blocks.find(block => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : 'No title'
      }
    }
  }
}
