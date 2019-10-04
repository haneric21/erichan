import React from "react";
import Section from "../Section";
import colors from "../../../../colors";
import SkillBar from "./SkillBar";

const Skills = () => (
  <Section title="Skills">
    <SkillBar name="JavaScript" width={100} color={colors.primary} />
    <SkillBar name="React" width={90} color={colors.secondary} />
    <SkillBar name="Node" width={40} color={colors.nodeGreen} />
    <SkillBar name="Mobile" width={30} color={colors.androidGreen} />
  </Section>
);

export default Skills;
