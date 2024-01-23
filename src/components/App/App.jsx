import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Loader from "../Loader/Loader";
import { isLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";

function App() {
  const isLoader = useSelector(isLoading);
  return (
    <>
      {isLoader && <Loader />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
