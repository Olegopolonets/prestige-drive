// import React from "react";
import notFoundImg from "../../img/404-image.webp";
import { StyledNavLink, StyledNoFoundWrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledNoFoundWrapper>
      <img src={notFoundImg} alt="not found" width={500} />
      <StyledNavLink to={"/"}>Go Home</StyledNavLink>
    </StyledNoFoundWrapper>
  );
};

export default NotFound;
