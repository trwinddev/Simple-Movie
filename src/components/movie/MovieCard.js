import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/button/Button";
import { tmdbAPI } from "config/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "components/loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { poster_path, title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800 ">
      <img
        // src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5 select-none"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button onCLick={() => navigate(`/movies/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.string,
  }),
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Somthing wwent wrong with this component
    </p>
  );
}

export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800 ">
      <LoadingSkeleton className="w-full h-[250px] rounded-lg mb-5"></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">
          <LoadingSkeleton className="w-full h-[20px]"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleton className="w-[50px] h-[10px]"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton className="w-[30px] h-[10px]"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton className="w-full h-[40px] rounded-md"></LoadingSkeleton>
      </div>
    </div>
  );
};

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
