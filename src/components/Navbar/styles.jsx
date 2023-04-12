import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, sharedPreferences } from "../../utils/theme";

export const NavContainer = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const NavMenu = styled.ul`
  background-color: ${colors.bg.primary};
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
  height: 2.25rem;
  transition: box-shadow 0.1s ease-out;
  &:hover {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.5em,
      rgba(90, 125, 188, 0.05) 0px 1em 1em;
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    width: 100%;
    margin: 0 3rem;
    flex-direction: row-reverse;
  }
`;

export const NavMenuItem = styled.li`
  padding: 0.2rem 1rem;
  border-right: 1px solid rgba(1, 1, 1, 0.4);
  &:last-child {
    border-right: none;
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    border-right: none;
    padding: 0.2rem 0.5rem;
    &:last-child {
      width: 100%;
    }
  }
`;

export const Link = styled(NavLink)`
  text-transform: capitalize;
  display: flex;
  color: ${colors.text.secondary};
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  margin: 0;
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
  padding: 0;
  margin: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    flex-direction: row-reverse;
  }
`;

export const NavSearch = styled.input`
  color: ${colors.text.secondary};
  width: 5.25rem;
  border: none;
  outline: none;
  color: black;
  font-weight: 600;
  font-size: 1em;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    width: 100%;
  }
  &::placeholder {
    color: ${colors.text.secondary};
    opacity: 0.5;
  }
`;

export const SearchIcon = styled.i`
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: opacity 0.1s ease-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const NavIcon = styled(SearchButton)`
  cursor: pointer;
  display: none;
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    display: flex;
  }
`;

export const NavSpan = styled.span`
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    display: none;
  }
`;
