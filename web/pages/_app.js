import React from 'react'
import BaseApp, {Container} from 'next/app'
import '../styles/shared.css'
import '../styles/layout.css'

class App extends BaseApp {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default App
