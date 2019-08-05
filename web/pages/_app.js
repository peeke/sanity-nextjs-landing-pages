import React from "react";
import BaseApp, { Container } from "next/app";
import Navigation from "components/Navigation";
import { getMenu } from "services/menus";
import "styles/shared.css";
import "styles/layout.css";

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    const data = [
      getMenu("main-menu"),
      Component.getInitialProps ? Component.getInitialProps(ctx) : {}
    ];

    const [mainMenu, pageProps] = await Promise.all(data);

    return { mainMenu, pageProps };
  }

  render() {
    const { Component, pageProps, mainMenu } = this.props;
    return (
      <Container>
        <Navigation {...mainMenu} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
