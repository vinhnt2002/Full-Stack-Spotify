"use client";
import SongItem from "@/components/Item/SongItem";
import { Song } from "@/type";

interface PageContentProps {
  songs: Song[];
}

import React from "react";
const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div>No song available</div>;
  }
  return (
    <div
      className="
  grid
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
  2xl:grid-cols-8
  gap-4
  mt-5
  "
    >
      {songs.map((song) => (
        <SongItem 
            key={song.id}
            data={song}
            onClick= {() =>{}}
        />
      ))}
    </div>
  );
};

export default PageContent;
