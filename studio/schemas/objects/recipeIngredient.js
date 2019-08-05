export default {
  title: 'Ingredient',
  name: 'recipeIngredient',
  type: 'object',
  fields: [
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'reference',
      to: [{ type: 'ingredient' }]
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number'
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string'
    }
  ],
  preview: {
    select: {
      ingredient: 'ingredient.title',
      amount: 'amount',
      unit: 'unit'
    },
    prepare({ ingredient, amount, unit }) {
      return {
        title: `${ingredient} (${amount}${unit})`,
        subtitle: 'Ingredient'
      }
    }
  }
}
