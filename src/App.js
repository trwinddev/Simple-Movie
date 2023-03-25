import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "components/banner/Banner";
import Main from "components/layout/Main";
// import HomePage from "components/pages/HomePage";
// import MoviePage from "components/pages/MoviePage";
// import MovieDetailPage from "components/pages/MovieDetailPage";

const HomePage = lazy(() => import("components/pages/HomePage"));
const MoviePage = lazy(() => import("components/pages/MoviePage"));
const MovieDetailPage = lazy(() => import("components/pages/MovieDetailPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
            <Route
              path="/movies/:movieId"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
