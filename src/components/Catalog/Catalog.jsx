import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";
import { selectorCars } from "../../redux/selectors.js";

const Catalog = () => {
  const allCars = useSelector(selectorCars);
  console.log(allCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {allCars?.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.make}</span>
              <br />
              <span>{item.model}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catalog;
