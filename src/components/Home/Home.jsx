import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../../redux/operations.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return <div>Home1</div>;
};

export default Home;
