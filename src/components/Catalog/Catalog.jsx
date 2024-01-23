import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import {
  selectFirstLoad,
  selectisLoadMore,
  selectorCars,
} from "../../redux/selectors.js";
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
import { isFirstLoad } from "../../redux/carsSlice.js";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const firstLoad = useSelector(selectFirstLoad);
  const isLoadMore = useSelector(selectisLoadMore);
  useEffect(() => {
    if (firstLoad) {
      dispatch(fetchCarsThunk(page));
      dispatch(isFirstLoad(false));
      setPage(page + 1);
    }
  }, [dispatch]);

  const allCars = useSelector(selectorCars);
  console.log(allCars.length);

  const handleLoadMoreClick = () => {
    if (isLoadMore) {
      setPage(page + 1);
      dispatch(fetchCarsThunk(page));
    }
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
          {isLoadMore && (
            <StyledWrapperButton>
              <StyledButtonLoadMore type="button" onClick={handleLoadMoreClick}>
                Load more
              </StyledButtonLoadMore>
            </StyledWrapperButton>
          )}
        </StyledCatalog>
      </StyledContainer>
    </>
  );
};

export default Catalog;
