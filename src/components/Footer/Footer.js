import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import { sendIcon } from "../../assets";

const Wrapper = styled.div`
  background-color: ${colors.lightDark};
  color: ${colors.white};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeButton = styled.button`
  border-radius: 3px;
  width: 200px;
  height: 36px;
  background-color: transparent;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
  overflow: hidden;

  &:hover,
  &:focus {
    background-color: ${colors.white};
    color: ${colors.lightDark};
  }
`;

const ButtonContent = styled.div`
  transition: transform 0.5s ease;
  transform: ${({ hover }) => (hover ? "translateY(-2rem)" : "translateY(0)")};
  line-height: 2rem;
`;

const HoveredContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 4px;
`;

const Footer = () => {
  const [hover, setHover] = useState(false);
  return (
    <Wrapper>
      <CodeButton
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() =>
          window.open("https://github.com/haneric21/erichan/tree/master")
        }
      >
        <ButtonContent hover={hover}>
          <div>Want to see code?</div>
          <HoveredContent>
            Ok, let's go! <ButtonIcon src={sendIcon} alt="Send Icon" />
          </HoveredContent>
        </ButtonContent>
      </CodeButton>
    </Wrapper>
  );
};

export default Footer;
