import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../colors";

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

const H1 = styled.h1`
  color: ${colors.secondary};
  font-size: 3rem;
  margin: 0;
`;

const ActionButton = styled.button`
  margin-top: 3rem;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  background-color: transparent;
  border: 1px solid ${colors.lightDark};
  color: ${colors.lightDark}
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 5rem;
  cursor: pointer;
  transition: color .3s, background-color .3s, opacity 1s;
  outline: none;
  opacity: ${({ animate }) => (animate ? "100" : "0")};

  &:hover,
  &:focus {
    background-color: ${colors.lightDark};
    color: ${colors.white};
  }
`;

const Hero = () => {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  useEffect(
    () =>
      setTimeout(() => {
        setButtonAnimation(true);
      }, 700),
    []
  );

  return (
    <Background>
      <H1>
        <span style={{ color: colors.primary }}>Hi, my name is</span> <br />
        Eric
      </H1>
      <ActionButton
        animate={buttonAnimation}
        onClick={() =>
          window.open("https://haneric21.github.io/resume/Resume.pdf")
        }
      >
        Resume
      </ActionButton>
    </Background>
  );
};

export default Hero;
