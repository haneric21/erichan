import React from "react";
import styled from "styled-components";
import colors from "../../../../colors";
import TrackVisibility from "react-on-screen";

const BarWrapper = styled.div`
  margin: 1em 0 1em 1em;
`;

const Bar = styled.div`
  width: ${({ width, isVisible }) => (isVisible ? `${width}%` : "0%")};
  background-color: ${({ color }) => color};
  height: 7px;
  margin-left: 0.5em;
  border-radius: 5px;
  color: ${colors.white}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width .5s;
`;

const SkillBar = ({ width, color, name }) => (
  <TrackVisibility once>
    {({ isVisible }) => (
      <BarWrapper>
        <div>{name}</div>
        <Bar width={width} color={color} isVisible={isVisible} />
      </BarWrapper>
    )}
  </TrackVisibility>
);

export default SkillBar;
