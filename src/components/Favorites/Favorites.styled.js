import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NoFavCardInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: var(--general-blue);
  }
`;

export const StyledToCatalogLink = styled(NavLink)`
  color: var(--general-blue);
  &:hover {
    color: var(--general-blue-active);
  }
`;
