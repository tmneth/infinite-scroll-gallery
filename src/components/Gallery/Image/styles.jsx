import styled from "styled-components";
import { colors, sharedPreferences } from "../../../utils/theme";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 14.375rem;
  box-shadow: rgba(0, 0, 0, 0.2) 1.75px 1.75px 1.75px;
  border-radius: 0.3rem;
  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    height: 20.375rem;
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    height: 27.375rem;
  }
`;

export const Backdrop = styled.div`
  opacity: ${(props) => (props.isHovering ? 1 : 0)};
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
  border-radius: 0.3rem;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.6rem;
  font-size: 1em;
  border-radius: 1.25rem;
  border: 2px solid ${colors.bg.primary};
  opacity: 0.85;
  background: transparent;
  color: ${colors.text.primary};
  font-weight: 600;
  margin-top: 1.25rem;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${colors.bg.primary};
    color: ${colors.text.secondary};
  }
`;

export const ImgTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    font-size: 24px;
  }
`;
export const ImgAuthor = styled.h5`
  font-size: 16px;
  margin: 0;
  font-style: italic;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    font-size: 20px;
  }
`;
export const Separator = styled.hr`
  background: ${colors.bg.primary};
  width: 20%;
  height: 2px;
  border: none;
`;
