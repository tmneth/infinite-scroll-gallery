import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils/theme";

export const NavContainer = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const NavMenu = styled.ul`
  background-color: ${colors.primary};
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.5rem;
  list-style: none;
  font-weight: 600;
  transition: box-shadow 0.1s ease-out;
  &:hover {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.5em,
      rgba(90, 125, 188, 0.05) 0px 1em 1em;
  }
`;

export const NavMenuItem = styled.li`
  padding: 0.2rem 1rem;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  border-right: 1px solid rgba(1, 1, 1, 0.4);
  &:last-child {
    border-right: none;
  }
`;

export const Link = styled(NavLink)`
  text-transform: capitalize;
  display: flex;
  color: #000000;
  opacity: 0.6;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;

export const SearchButton = styled.button`
  background-color: inherit;
  border: none;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavSearch = styled.input`
  width: 5rem;
  background-color: transparent;
  border: none;
  padding: 5px;
  outline: none;
  font-weight: 600;
  font-size: 1em;
`;

export const SearchIcon = styled.i`
  cursor: pointer;
  color: #000000;
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  justify-content: center;
  transition: opacity 0.1s ease-out;
  &:hover {
    opacity: 0.7;
  }
`;
