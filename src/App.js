import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";
import Header from "./components/layout/Header";
import HomePage from "./components/pages/HomePage";
import Main from "./components/layout/Main";
import MoviePage from "./components/pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
