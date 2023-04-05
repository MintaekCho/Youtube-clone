import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../component/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Video() {
  const { q } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(["videos", q], async () => youtube.search(q));

  console.log(videos);

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>error.....</p>}
      {videos && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 md:px-7 lg:px-10 lg:grid-cols-4 2xl:grid-cols-5 gap-5 p-4 w-full min-w-[300px]">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
