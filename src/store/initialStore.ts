import { TStore } from "./types";

const initialStore: TStore = {
  currentAudio: null,
  favourites: [],
  searchQuery: "",
  tracks: [],
  trackDetails: null,
};

export { initialStore };
