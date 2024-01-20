import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import { selectorCars } from "../../redux/selectors.js";
import { StyledContainer } from "../Container/Container.styled.js";
import { StyledCarsList } from "./Catalog.styled.js";

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
              <li key={item.id}>
                <img
                  src={item.img || item.photoLink}
                  alt={item.model}
                  width={274}
                  height={268}
                />
                <span>{item.make}</span>
                <span>{item.model}</span>
              </li>
            );
          })}
        </StyledCarsList>
      </StyledContainer>
    </>
  );
};

export default Catalog;
