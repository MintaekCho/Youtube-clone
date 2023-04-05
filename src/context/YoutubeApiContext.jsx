import { useContext } from "react";
import { createContext } from "react";
import FakeYoutubeClient from "../api/FakeYoutubeClient";
import Youtube from "../api/Youtube";
import YoutubeClient from "../api/YoutubeClient";

const YoutubeApiContext = createContext();

const fakeYoutubeClient = new FakeYoutubeClient();
const youtubeClient = new YoutubeClient();
const youtube = new Youtube(youtubeClient);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
