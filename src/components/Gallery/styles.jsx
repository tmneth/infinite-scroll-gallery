import styled from "styled-components";
import { sharedPreferences } from "../../utils/theme";

export const Container = styled.div`
  padding: 1.75rem;
  padding-top: calc(3.25rem + 1.75rem * 2);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
  max-width: ${sharedPreferences.pageWidth};
  margin: auto;
  @media (max-width: ${sharedPreferences.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${sharedPreferences.breakpoints.sm}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
