import { Outlet } from "react-router-dom";
import { StyledContainer } from "../Container/Container.styled";
import { StyledHeader, StyledLogo, StyledNavLink } from "./Layout.styled";
import Logo from "../../../public/vite.svg";

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledLogo to={"/"}>
            <img src={Logo} alt="Logo" width={40} />
            <p>Prestige Drive</p>
          </StyledLogo>
          <nav>
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
