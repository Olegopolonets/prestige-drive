// import React from 'react'

import Card from "../Catalog/Card.jsx";
import { StyledCarsList } from "../Catalog/Catalog.styled";
import { StyledContainer } from "../Container/Container.styled";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favoriteCar"));
  console.dir(favorites);

  const myArray = [];
  myArray.push(favorites);

  return (
    <StyledContainer>
      <StyledCarsList>
        <StyledCarsList>
          {myArray?.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
        </StyledCarsList>
      </StyledCarsList>
    </StyledContainer>
  );
};

export default Favorites;
