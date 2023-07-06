import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/type";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import PlayButton from "../MusicPlayer/PlayButton";
import Button from "../Button";

interface libaryItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const LibaryItem: React.FC<libaryItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () =>{
    if(onClick){
      return onClick(data.id)
      // doing something future
    }
  }

  return (
    <button
    onClick={handleClick}
      className="
      relative
      flex 
      items-center
      group
      rounded-md
      hover:bg-neutral-800/50
      overflow-hidden
      transition
      gap-x-4
      w-full
    "
    >
      <div
        className="
          relative
          min-h-[48px]
          min-w-[48px]
        "
      >
        <Image className="rounded-lg" src={imageUrl || "/images/liked.pgn"} alt="Image" fill />
      </div>
      <div
        className="
      flex
      flex-col
      gap-y-1
      overflow-hidden
      "
      >
        <p className="flex truncate text-white ">{data.title}</p>
        <p className="flex truncate text-neutral-400 text-sm ">{data.author}</p>
      </div>

      {/* <div
        className="
      absolute
      right-4
      "
      >
        <Button />
      </div> */}
    </button>
  );
};

export default LibaryItem;
