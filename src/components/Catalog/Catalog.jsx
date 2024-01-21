import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import { selectorCars } from "../../redux/selectors.js";
import { StyledContainer } from "../Container/Container.styled.js";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";
import {
  IconButton,
  StyledButton,
  StyledCard,
  StyledCardDescription,
  StyledCardInfo,
  StyledCarsList,
  GradientIMG,
} from "./Catalog.styled.js";

const Catalog = () => {
  const allCars = useSelector(selectorCars);
  console.log(allCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <StyledCarsList>
          {allCars?.map((item) => {
            return (
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
            );
          })}
        </StyledCarsList>
      </StyledContainer>
    </>
  );
};

export default Catalog;
