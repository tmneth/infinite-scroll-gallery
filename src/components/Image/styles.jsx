import styled from "styled-components";
import { colors, sharedPreferences } from "../../utils/theme";

export const Img = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Backdrop = styled.div`
  opacity: ${(props) => (props.isHovering ? 1 : 0)};
  border-radius: 3px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.text.primary};
  text-align: center;
  background-color: rgba(1, 1, 1, 0.5);
  transition: opacity 0.125s ease-in-out;
`;

export const ImgContainer = styled.div`
  border-radius: 5px;
  position: relative;
  height: 14.375rem;
  box-shadow: rgba(0, 0, 0, 0.2) 1.75px 1.75px 1.75px;
  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    height: 20.375rem;
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    height: 27.375rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 1em;
  border-radius: 20px;
  border: 2px solid ${colors.bg.primary};
  opacity: 0.85;
  background: transparent;
  color: ${colors.text.primary};
  font-weight: 600;
  margin-top: 20px;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${colors.bg.primary};
    color: #000000;
  }
`;

export const ImgTitle = styled.h4`
  margin: 0;
`;
export const ImgAuthor = styled.h5`
  margin: 0;
  font-style: italic;
`;
export const Separator = styled.hr`
  background: ${colors.bg.primary};
  width: 20%;
  height: 2px;
  border: none;
`;
