import styled from "styled-components";
import { colors, sharedPreferences } from "../../utils/theme";

export const Img = styled.img`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Backdrop = styled.div`
  opacity: 0;
  border-radius: inherit;
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
  transition: opacity 0.1s ease-in-out;
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 14.375rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover ${Backdrop} {
    opacity: 1;
  }
  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    /* height: 250px; */
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    /* height: 500px; */
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

export const ImgTitle = styled.h3`
  margin: 0;
`;
export const ImgAuthor = styled.h5`
  margin: 0;
`;
export const Separator = styled.hr`
  background: ${colors.bg.primary};
  width: 20%;
  height: 2px;
  border: none;
`;
