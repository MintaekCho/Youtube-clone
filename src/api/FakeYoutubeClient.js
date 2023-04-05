import axios from "axios";

export default class FakeYoutubeClient {
  async search() {
    return axios.get("/video/search.json")
  }

  async videos() {
    return axios.get("/video/popular.json")
  }
}
