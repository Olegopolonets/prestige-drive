import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage";

function App() {
  return (
    <>
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
