import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['recipe', 'recipeIngredient'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Recipes')
        .icon(MdDashboard)
        .schemaType('recipe')
        .child(S.documentTypeList('recipe').title('Recipe')),
      S.listItem()
        .title('Ingredients')
        .schemaType('ingredient')
        .child(S.documentTypeList('ingredient').title('Ingredient')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
