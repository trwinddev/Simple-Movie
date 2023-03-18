import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config/config";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-USz

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log(
    "🚀 ~ file: MovieDetailPage.js:10 ~ MovieDetailPage ~ data:",
    data
  );
  return <div>MovieDetailPage</div>;
};

export default MovieDetailPage;
