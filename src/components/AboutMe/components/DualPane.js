import React from "react";
import styled from "styled-components";
import { Sticky, StickyContainer } from "react-sticky";
import { mailIcon, linkedinIcon } from "../../../assets";

const DualPanelWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  font-family: Montserrat;
`;

const HalfWidthWrapper = styled.div`
  width: 50%;
`;

const StickyPane = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: 2rem;
  font-weight: 600;
`;

const ScrollingPane = styled.div`
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.9rem;
`;

const ContactInfo = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  justify-content: space-between;
  width: 5rem;
`;

const DualPane = props => (
  <StickyContainer>
    <DualPanelWrapper>
      <HalfWidthWrapper>
        <Sticky>
          {({ style }) => (
            <StickyPane
              backgroundColor={props.color}
              color={props.lightColor}
              style={style}
            >
              {props.title}
              <ContactInfo>
                <a href="mailto:haneric21@gmail.com">
                  <img src={mailIcon} alt="email" />
                </a>
                <a
                  href="https://www.linkedin.com/in/eric-han-30a98ab5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="linkedIn" />
                </a>
              </ContactInfo>
            </StickyPane>
          )}
        </Sticky>
      </HalfWidthWrapper>
      <HalfWidthWrapper>
        <ScrollingPane backgroundColor={props.lightColor}>
          {props.children}
        </ScrollingPane>
      </HalfWidthWrapper>
    </DualPanelWrapper>
  </StickyContainer>
);

export default DualPane;
