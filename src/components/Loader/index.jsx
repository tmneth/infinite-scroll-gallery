import React from "react";
import styled from "styled-components";

// https://cssloaders.github.io/
const StyledLoader = styled.span`
  z-index: 2;
  width: 20px;
  height: 12px;
  display: block;
  margin: auto;
  margin-bottom: 1.75rem;
  position: relative;
  border-radius: 4px;
  color: #000;
  opacity: 0.5;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.2s 0.1s ease infinite alternate;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 20px;
    height: 12px;
    background: currentColor;
    position: absolute;
    border-radius: 4px;
    top: 0;
    right: 110%;
    animation: animloader 0.2s ease infinite alternate;
  }
  &::after {
    left: 110%;
    right: auto;
    animation-delay: 0.2s;
  }

  @keyframes animloader {
    0% {
      width: 20px;
    }
    100% {
      width: 48px;
    }
  }
`;

function Loader() {
  return <StyledLoader className="loader" />;
}

export default Loader;
