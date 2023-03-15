import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white ">
      <img
        src="https://vtv1.mediacdn.vn/2019/4/26/poster-payoff-1-1556273680151870157160-crop-1556273779257196175768.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="font-bold text-xl mb-3">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
