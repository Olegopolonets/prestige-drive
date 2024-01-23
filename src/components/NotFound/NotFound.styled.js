import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNoFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 30px;
  color: var(--general-blue);
  transition: all 0.3s linear;
  &:hover {
    color: var(--general-blue-active);
    font-size: 100px;
  }
`;
