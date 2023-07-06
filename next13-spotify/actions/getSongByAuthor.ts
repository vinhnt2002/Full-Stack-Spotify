import { Song } from "@/type";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import getSongs from "./getSongs";

const getSongByAuthor = async (author: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!author) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("author", `%${author}%`)
    .order('created_at', {ascending: false})

    if(error){
        console.log(error);
        
    }

    return (data as any) || []
};

export default getSongByAuthor;
