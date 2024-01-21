// import React from 'react'

import { FaRegHeart } from "react-icons/fa";
import {
  GradientIMG,
  IconButton,
  StyledButton,
  StyledCard,
  StyledCardDescription,
  StyledCardInfo,
} from "./Catalog.styled";

const Card = ({ item }) => {
  return (
    <>
      <StyledCard key={item.id}>
        <img
          src={item?.img || item?.photoLink}
          alt={item?.title}
          width={274}
          height={268}
        />
        <GradientIMG></GradientIMG>
        <IconButton type="button">
          <FaRegHeart />
          {/* <FaHeart /> */}
        </IconButton>
        <StyledCardInfo>
          <h2>
            {item?.make} <span>{item?.model}</span>, {item?.year}
          </h2>
          <p>{item?.rentalPrice}</p>
        </StyledCardInfo>
        <StyledCardDescription>
          <p>{item.address.split(",")[1].trim()}</p>
          <span>|</span>
          <p>{item.address.split(",")[2].trim()}</p>
          <span>|</span>
          <p>{item?.rentalCompany}</p>
          <span>|</span>
          <p>{item?.type}</p>
          <span>|</span>
          <p>{item?.model}</p>
          <span>|</span>
          <p>{item?.id}</p>
          <span>|</span>
          <p>{item?.accessories[0]}</p>
        </StyledCardDescription>
        <StyledButton type="button">Learn more</StyledButton>
      </StyledCard>
    </>
  );
};

export default Card;
