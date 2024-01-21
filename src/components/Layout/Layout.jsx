import { Outlet } from "react-router-dom";
import { StyledContainer } from "../Container/Container.styled";
import { StyledHeader, StyledNavLink } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <nav>
            <StyledNavLink to={"/"}>logo</StyledNavLink>
            <StyledNavLink to={"/"}>Home</StyledNavLink>
            <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
            <StyledNavLink to={"/favorites"}>Favorites</StyledNavLink>
          </nav>
        </StyledContainer>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Layout;
