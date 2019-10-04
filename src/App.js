import React, { Component } from "react";
import styled from "styled-components";
import { Hero, AboutMe, Footer } from "./components";

const FullPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <FullPageWrapper>
        <Hero />
        <AboutMe />
        <Footer />
      </FullPageWrapper>
    );
  }
}

export default App;
