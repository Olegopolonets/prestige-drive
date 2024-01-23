import React from "react";

import Card from "../Catalog/Card.jsx";
import { useSelector } from "react-redux";
import { StyledCarsList, StyledCatalog } from "../Catalog/Catalog.styled";
import { StyledContainer } from "../Container/Container.styled";
import { listFavorite } from "../../redux/selectors";
import { NoFavCardInfo, StyledToCatalogLink } from "./Favorites.styled.js";

const Favorites = () => {
  const favoritesCars = useSelector(listFavorite);

  return (
    <StyledContainer>
      <StyledCatalog>
        <StyledCarsList>
          {favoritesCars.length === 0 && (
            <NoFavCardInfo>
              <h2>
                You have not yet added the car to
                <span>&nbsp;Favorites</span>.
              </h2>
              <StyledToCatalogLink to={"/catalog"}>
                Go to Catalog
              </StyledToCatalogLink>
            </NoFavCardInfo>
          )}
          {favoritesCars?.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </StyledCarsList>
      </StyledCatalog>
    </StyledContainer>
  );
};

export default Favorites;
