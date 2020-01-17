import React from "react";
import styled from "styled-components";
import colors from "../../../../colors";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Link = styled.a`
  font-size: 1em;
  font-weight: 600;
  color: ${colors.black};
  background-size: 100% 0.4em;
  background-repeat: no-repeat;
  background-position: 0px 110%;
  text-decoration: none;
  background-image: linear-gradient(45deg, ${colors.primary}, transparent);
  transition: background-size 0.3s;

  &:hover,
  &:focus {
    background-size: 100% 1.1em;
  }
`;

const Description = styled.p`
  margin-left: 2em;
  font-size: 0.9em;
`;

const ReadingLink = props => (
  <Wrapper>
    <Link href={props.link} target="_blank" rel="noopener noreferrer">
      {props.title}
    </Link>
    <Description>{props.description}</Description>
  </Wrapper>
);

export default ReadingLink;
