import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/type";
import Image from "next/image";
import React from "react";

interface SongItemProps {
  data: Song;
  onClick: () => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      className="
  relative
  group
  flex
  flex-col
  items-center
  justify-center
  rounded-md
  overflow-hidden
  gap-x-4
  bg-neutral-400/10
  cursor-pointer
  hover:bg-neutral-400/10
  transition
  p-3
  "
    >
      <div
        className="
        relative
        aspect-square
        bg-red-50
        w-full
        h-full
        rounded-md
        overflow-hidden
      "
      >
        <Image
        className="object-cover"
        src={imagePath || '/images/liked.png'}
        fill
        alt="image"
        />

        {/* <img src={imagePath } alt="image" /> */}
      </div>
      <div>{data.title}</div>
      <div>{data.author}</div>
    </div>
  );
};

export default SongItem;
