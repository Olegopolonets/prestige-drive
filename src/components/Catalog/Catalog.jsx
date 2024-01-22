import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import { selectorCars } from "../../redux/selectors.js";
import { StyledContainer } from "../Container/Container.styled.js";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";
import {
  StyledButtonLoadMore,
  StyledCarsList,
  StyledCatalog,
  StyledWrapperButton,
} from "./Catalog.styled.js";
import Card from "./Card.jsx";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk(page));
    setPage(page + 1);
  }, [dispatch]);
  const allCars = useSelector(selectorCars);
  console.log(allCars);

  const handleLearnMoreClick = () => {
    setPage(page + 1);
    dispatch(fetchCarsThunk(page));
  };

  return (
    <>
      <StyledContainer>
        <StyledCatalog>
          <StyledCarsList>
            {allCars?.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </StyledCarsList>
          <StyledWrapperButton>
            <StyledButtonLoadMore type="button" onClick={handleLearnMoreClick}>
              Load more
            </StyledButtonLoadMore>
          </StyledWrapperButton>
        </StyledCatalog>
      </StyledContainer>
    </>
  );
};

export default Catalog;
