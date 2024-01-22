// import React from 'react'

import Card from "../Catalog/Card.jsx";
import { useSelector } from "react-redux";
import { StyledCarsList, StyledCatalog } from "../Catalog/Catalog.styled";
import { StyledContainer } from "../Container/Container.styled";
import { listFavorite } from "../../redux/selectors";

const Favorites = () => {
  const favoritesCars = useSelector(listFavorite);

  return (
    <StyledContainer>
      <StyledCatalog>
        <StyledCarsList>
          {favoritesCars.length === 0 && (
            <h2>
              You have not yet added the car to{" "}
              <span style={{ color: "blue" }}>Favorites</span>.
            </h2>
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
