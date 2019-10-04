import React from "react";
import styled from "styled-components";
import {
  Skills,
  Experience,
  GoodReading,
  Philosophy,
  DualPane
} from "./components";
import colors from "../../colors";

const Header = styled.h2`
  font-weight: 700;
  line-height: 1.5em;
  font-size: 1.1em;
  margin-bottom: 1.5em;
`;

const ListItem = styled.li`
  margin: 0.4em 0;
`;

const AboutMe = () => (
  <DualPane color={colors.primary} lightColor={colors.white} title="About Me">
    <Header>
      I'm a software engineer in the D.C. area with a passion for clean,
      performant code - I also enjoy good design.
    </Header>
    <div>
      <p>
        I love solving problems that require a bit of thought and creativity to
        get to the best solution. And by "best solution", I mean one that:
        <ul>
          <ListItem>solves the problem</ListItem>
          <ListItem>is as simple and clean as possible</ListItem>
          <ListItem>is stable and future-proof</ListItem>
          <ListItem>can be achieved in a reasonable amount of time</ListItem>
        </ul>
      </p>
    </div>
    <Skills />
    <Experience />
    <Philosophy />
    <GoodReading />
  </DualPane>
);

export default AboutMe;
