import React from 'react';
import PropTypes from 'prop-types';
import Container from '../container/Container';
import { StyledSection, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </Container>
    </StyledSection>
  );
};

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
