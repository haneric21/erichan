import React from "react";
import styled from "styled-components";
import { remineIcon, fbIcon, dexcomIcon, codeSandbox } from "../../../assets";
import Section from "../components/Section";
import colors from "../../../colors";
import TrackVisibility from "react-on-screen";

const Comapnies = styled.div`
  margin: 2em;
  display: flex;
  justify-content: space-between;
  transition: transform 0.5s ease, opacity 0.5s;
  transform: ${({ isVisible }) =>
    !isVisible ? "translateY(-50px)" : "translateY(0)"};
  opacity: ${({ isVisible }) => (!isVisible ? 0 : 100)};
`;

const AvatarWrapper = styled.div`
  width: 60px;
  font-size: 0.9em;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border 1px solid ${colors.warmBlack};
  margin-bottom: 8px;
`;

const Experience = () => (
  <Section title="Experiences">
    <TrackVisibility once>
      <Comapnies>
        <AvatarWrapper>
          <Avatar src={remineIcon} alt="Remine" />
          Remine
        </AvatarWrapper>
        <AvatarWrapper>
          <Avatar src={fbIcon} alt="Facebook" />
          Facebook
        </AvatarWrapper>
        <AvatarWrapper>
          <Avatar src={dexcomIcon} alt="Dexcom" />
          Dexcom
        </AvatarWrapper>
        <AvatarWrapper>
          <Avatar src={codeSandbox} alt="Personal Projects" />
          Personal Projects
        </AvatarWrapper>
      </Comapnies>
    </TrackVisibility>
  </Section>
);

export default Experience;
