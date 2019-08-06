import UnsplashImagePicker from '../components/UnsplashImagePicker'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Subtitle',
      type: 'string',
      name: 'subtitle'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
      inputComponent: UnsplashImagePicker
    }
  ]
}
