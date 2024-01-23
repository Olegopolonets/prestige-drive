import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 7px solid var(--general-blue);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--general-blue);
  font-weight: 700;
  padding: 10px 20px;
  &.active {
    color: var(--white);

    background-color: var(--general-blue-active);
    border-radius: 10px;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  color: var(--general-blue-active);
`;
