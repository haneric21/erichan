import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Link = styled.a`
  font-size: 1em;
  font-weight: 600;
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
