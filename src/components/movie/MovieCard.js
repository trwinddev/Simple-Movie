import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config/config";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { poster_path, title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800  h-full ">
      <img
        // src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5 select-none"
      />
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onCLick={() => navigate(`/movies/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

export default MovieCard;
