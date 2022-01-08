import React from "react";
import PropTypes from "prop-types";
import { StyledSection, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
