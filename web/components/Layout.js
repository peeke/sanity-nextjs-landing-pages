import React from 'react'
import Head from 'next/head'

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

      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </>
  )
}

export default Layout
