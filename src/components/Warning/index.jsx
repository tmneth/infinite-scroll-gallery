import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const StyledWarningMessage = styled.h3`
  background-color: ${colors.bg.warning};
  color: ${colors.text.warning};
  padding: 1rem;
  text-align: center;
  border-radius: 0.3rem;
  font-weight: 500;
  margin: 0;
`;

function Warning({ message }) {
  return <StyledWarningMessage>{message}</StyledWarningMessage>;
}

export default Warning;
