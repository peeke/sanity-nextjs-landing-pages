import React, {Component} from 'react'
import groq from 'groq'
import Layout from '../../components/Layout'
import client from '../../client'
import SimpleBlockContent from '../../components/SimpleBlockContent'

const pageQuery = groq`
*[slug.current == $slug][0]{
  title,
  description,
  duration {
    preperationTime,
    durationTime
  },
  ingredients[] {
    "title": ingredient->title,
    amount,
    unit,
  },
  steps[] {
    text
  }
}
`

class Recipe extends Component {

  static async getInitialProps ({ query }) {
    const slug = query.slug

    return {
      ...await client.fetch(pageQuery, { slug })
    }
  }

  render () {
    const {
      title,
      description,
      duration,
      ingredients,
      steps,
    } = this.props

    return (
      <Layout>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Preparation time: {duration.preparationTime} minutes<br/>waiting time: {duration.waitingTime} minutes</p>

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(({ title, amount, unit }) => (
            <li>{title} ({amount}{unit})</li>
          ))}
        </ul>

        <h2>Preparation</h2>
        <ol>
          {steps.map(({text}) => (
            <li><SimpleBlockContent blocks={text}/></li>
          ))}
        </ol>
      </Layout>
    )
  }
}

export default Recipe
