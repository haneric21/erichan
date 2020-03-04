import React from "react";
import styled from "styled-components";
import { Skills, GoodReading, Philosophy, DualPane } from "./components";
import colors from "../../colors";

const Header = styled.h2`
  font-weight: 700;
  line-height: 1.5em;
  font-size: 1.1em;
  margin-bottom: 1.5em;
`;

const AboutMe = () => (
  <DualPane color={colors.primary} lightColor={colors.white} title="About Me">
    <Header>
      I'm a software engineer in the Pittsburgh area with a passion for clean,
      performant code.
    </Header>
    <Skills />
    <Philosophy />
    <GoodReading />
  </DualPane>
);

export default AboutMe;
