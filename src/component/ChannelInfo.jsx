import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-2xl">
      <div className="flex items-center">
        {url && <img className="w-12 h-12 rounded-full" src={url} alt={name} />}
        <p className="font-medium ml-2">{name}</p>
      </div>

      <button className="mr-8 bg-red-600 py-2 px-4 text-white font-bold rounded-xl">
        Sub
      </button>
    </div>
  );
}
