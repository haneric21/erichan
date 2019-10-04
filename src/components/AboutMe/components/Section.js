import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1em 0;
`;

const Section = props => (
  <Wrapper>
    <h3>{props.title}</h3>
    {props.children}
  </Wrapper>
);

export default Section;
