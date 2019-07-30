import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import client from 'client'

const {projectId, dataset} = client.config()

function SimpleBlockContent (props) {
  const {blocks} = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return typeof blocks === 'string'
    ? <p>{blocks}</p>
    : <BlockContent blocks={blocks} projectId={projectId} dataset={dataset} />
}

export default SimpleBlockContent
