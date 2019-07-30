import React from 'react'
import Head from 'next/head'

import Container from 'components/shared/layout/Container'

function Layout (props) {
  const { children } = props

  // if (!config) {
  //   console.error('Missing config')
  //   return <div>Missing config</div>
  // }

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>

      <Container>
        <div className='content'>{children}</div>
      </Container>
    </>
  )
}

export default Layout
