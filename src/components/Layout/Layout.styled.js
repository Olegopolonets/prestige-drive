import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  background: var(--general-blue);

  nav {
    display: flex;
    gap: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  &.active {
    color: white;
    text-decoration: underline;
  }
`;
