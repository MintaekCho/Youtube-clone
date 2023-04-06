import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../component/ChannelInfo";
import RelateVideo from "../component/RelateVideo";

export default function VideoDetails() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
          frameBorder="0"
        ></iframe>
        <div className="mt-6">
          <h2 className="text-lg font-bold my-2 mb-4">{title}</h2>
          <div className="bg-gray-200 p-4 rounded-xl">
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre className="font-medium mt-4 whitespace-pre-wrap">
              {description}
            </pre>
          </div>
        </div>
      </article>
      <section className="basis-2/6">
        <RelateVideo id={video.id} />
      </section>
    </section>
  );
}
