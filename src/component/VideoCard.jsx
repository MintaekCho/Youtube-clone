import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap-2 ml-2 mb-4" : ""}
      onClick={() => {
        navigate(`/video/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? " h-40" : "w-full h-3/5 rounded-lg"}
        src={`${video.snippet.thumbnails.high.url}`}
        alt="youtube-thumbnail"
      />
      <div className={isList ? "flex flex-col justify-between" : ""}>
        <p className="line-clamp-2 text-md font-medium mt-2">
          {video.snippet.title}
        </p>
        <div>
          <p className="text-[#606060] mt-2">{video.snippet.channelTitle}</p>
          <p className="text-[#606060]">
            {formatAgo(video.snippet.publishedAt, "ko")}
          </p>
        </div>
      </div>
    </li>
  );
}
