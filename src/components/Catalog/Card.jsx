import React from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  GradientIMG,
  IconButton,
  StyledButton,
  StyledCard,
  StyledCardDescription,
  StyledCardInfo,
} from "./Catalog.styled";

import {
  listFavorite,
  modalIsOpen,
  selectClickCardId,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  changeModalOpen,
  deleteFavorite,
  changeClickCardId,
} from "../../redux/carsSlice";
import Modal from "../Modal/Modal";

const Card = ({ item }) => {
  const favoritesCars = useSelector(listFavorite);

  const isModalOpen = useSelector(modalIsOpen);
  const selectedId = useSelector(selectClickCardId);

  const dispatch = useDispatch();

  const isFavorite = favoritesCars?.some((car) => car.id === item.id);

  const changeFavoriteStates = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(item.id));
    } else {
      dispatch(addFavorite(item));
    }
  };

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
        <IconButton type="button" onClick={changeFavoriteStates}>
          {(!isFavorite && <FaRegHeart />) || (
            <FaHeart style={{ fill: "blue" }} />
          )}
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
        <StyledButton
          type="button"
          onClick={() => {
            dispatch(changeModalOpen(true));
            dispatch(changeClickCardId(item?.id));
          }}
        >
          Learn more
        </StyledButton>

        {isModalOpen && selectedId === item?.id && <Modal item={item} />}
      </StyledCard>
    </>
  );
};

export default Card;
