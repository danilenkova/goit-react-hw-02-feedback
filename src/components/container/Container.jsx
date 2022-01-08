import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./Container.styled";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.protoTypes = {
  children: PropTypes.node,
};

export default Container;
