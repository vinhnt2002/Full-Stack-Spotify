import React from "react";
import { FaPlay } from "react-icons/fa";
const PlayButton = () => {
  return (
    <button
      className="
       flex
       rounded-full
       items-center
       justify-center
       bg-green-500
       transition
       opacity-0
       p-4
       drop-shadow-md
       translate
       translate-y-1/4
       group-hover:opacity-100
       group-hover:translate-y-0
       scale-110
    "
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
