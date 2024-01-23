import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import {
  selectFirstLoad,
  selectisLoadMore,
  selectorCars,
} from "../../redux/selectors.js";
import { StyledContainer } from "../Container/Container.styled.js";
import Select, { components } from "react-select";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  StyledButtonLoadMore,
  StyledCarsList,
  StyledCatalog,
  StyledEmpty,
  StyledFilterInput,
  StyledFormFilters,
  StyledFromInput,
  StyledSelect,
  StyledToInput,
  StyledWrapperButton,
  selectStyle,
} from "./Catalog.styled.js";
import Card from "./Card.jsx";
import {
  changeFilters,
  changeSelectFilter,
  isFirstLoad,
} from "../../redux/carsSlice.js";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const firstLoad = useSelector(selectFirstLoad);
  const isLoadMore = useSelector(selectisLoadMore);
  const allCars = useSelector(selectorCars);

  /* filters */
  const [makeFilter, setMakeFilter] = useState("");
  const [rentalPriceFilter, setRentalPriceFilter] = useState(null);
  const [fromMileageFilter, setFromMileageFilter] = useState(null);
  const [toMileageFilter, setToMileageFilter] = useState(null);

  const getSelectValue = (selectedOp) => {
    dispatch(changeSelectFilter(selectedOp?.value));
  };

  /*  */

  /* select */
  const uniqueOptions = [...new Set(allCars?.map((item) => item?.make))];
  const arrOfOptions = uniqueOptions.sort();

  const uniquePrices = [...new Set(allCars?.map((item) => item?.rentalPrice))];
  const arrOfPrices = uniquePrices.sort((a, b) => a - b);

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoIosArrowUp
            size={18}
            label="Arrow up"
            color={"var(--black-filter)"}
          />
        ) : (
          <IoIosArrowDown
            size={18}
            label="Arrow down"
            color={"var(--black-filter)"}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  /* */

  /* */
  const filterSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const makeValue = formData.get("make");
    const rentalPriceValue = formData.get("rentalPrice");
    const fromMileageValue = formData.get("from");
    const toMileageValue = formData.get("to");

    setMakeFilter(makeValue || "");
    setRentalPriceFilter(Number(rentalPriceValue));
    setFromMileageFilter(Number(fromMileageValue));
    setToMileageFilter(Number(toMileageValue));

    dispatch(
      changeFilters({
        makeValue,
        rentalPriceValue,
        fromMileageValue,
        toMileageValue,
      })
    );
  };

  const filteredGallery = allCars
    .filter((item) => (makeFilter ? item.make === makeFilter : true))
    .filter((item) =>
      rentalPriceFilter ? item.rentalPrice === rentalPriceFilter : true
    )
    .filter((item) =>
      fromMileageFilter ? item.mileage >= fromMileageFilter : true
    )
    .filter((item) =>
      toMileageFilter ? item.mileage <= toMileageFilter : true
    );

  /* */
  useEffect(() => {
    if (firstLoad) {
      dispatch(fetchCarsThunk(page));
      dispatch(isFirstLoad(false));
      setPage(page + 1);
    }
  }, [dispatch]);

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
          <StyledFormFilters onSubmit={filterSearch}>
            <StyledSelect>
              <label htmlFor="make">Car brand</label>
              <Select
                name="make"
                options={arrOfOptions.map((make) => ({
                  value: make,
                  label: make,
                }))}
                placeholder="Enter the text"
                styles={selectStyle}
                onChange={getSelectValue}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
              />
            </StyledSelect>

            <StyledSelect>
              <label htmlFor="rentalPrice">Price/ 1 hour</label>
              <Select
                options={arrOfPrices.map((price) => ({
                  value: price,
                  label: price,
                }))}
                placeholder="To $"
                name="rentalPrice"
                styles={selectStyle}
                onChange={getSelectValue}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
              />
            </StyledSelect>

            <StyledSelect>
              <label>Сar mileage / km</label>

              <StyledFilterInput>
                <StyledFromInput type="number" placeholder="From" name="from" />
                <StyledToInput type="number" placeholder="To" name="to" />

                <button type="submit">Search</button>
              </StyledFilterInput>
            </StyledSelect>
          </StyledFormFilters>

          {filteredGallery?.length === 0 && (
            <StyledEmpty>
              We have no cars matching your filter request
            </StyledEmpty>
          )}

          <StyledCarsList>
            {filteredGallery?.map((item, index) => {
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
