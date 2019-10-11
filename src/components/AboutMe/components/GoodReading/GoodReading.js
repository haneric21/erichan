import React from "react";
import ReadingLink from "./ReadingLink";
import Section from "../../components/Section";

const GoodReading = () => (
  <Section title="Good Reading">
    <ReadingLink
      title="Writing resilient components - Dan Abramov"
      link="https://overreacted.io/writing-resilient-components/"
      description={`Generally good React coding design by Dan Abramov.
      Of course, the solution isn't a dogmatic approach to any of these "rules",
      but they can help you get in the right frame of mind to think about React.
      Some highlights: don't stop the data flow (e.g. loading props to local state),
      push state management as far down as what's reasonable`}
    />
    <ReadingLink
      title="Performant React - Seif Ghezala"
      link="https://medium.com/free-code-camp/yeah-hooks-are-good-but-have-you-tried-faster-react-components-e698a8db468c"
      description={`A quick read on how React handles rendering, and a few tips on how to improve performance.`}
    />
    <ReadingLink
      title="React as a UI Runtime - Dan Abramov"
      link="https://overreacted.io/react-as-a-ui-runtime/"
      description={`A super deep-dive into React and how it runs under the hood.
      Definitely an "extra credit" type of reading for a free Saturday.`}
    />
    <ReadingLink
      title="The worst volume control UI"
      link="https://uxdesign.cc/the-worst-volume-control-ui-in-the-world-60713dc86950"
      description={
        "A fun collection of what happens when you have a group of bored developers and designers.."
      }
    />
  </Section>
);

export default GoodReading;
