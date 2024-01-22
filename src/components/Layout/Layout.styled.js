import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  background: var(--general-blue);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
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

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
`;
