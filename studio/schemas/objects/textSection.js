export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare({ text }) {
      const flattenedString = text[0].children.map(child => child.text).join('')
      const preview =
        flattenedString.length > 100 ? flattenedString.slice(0, 100) + '&hellip;' : flattenedString
      return { title: preview }
    }
  }
}
