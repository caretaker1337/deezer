import { TAction, TActionTypes } from "./types";

export const addToFavourites: TAction<"favourites"> = (payload) => ({
  payload,
  type: TActionTypes.ADD_TO_FAVOURITES,
});

export const setCurrentAudio: TAction<"currentAudio"> = (payload) => ({
  payload,
  type: TActionTypes.SET_CURRENT_AUDIO,
});

export const setTracks: TAction<"tracks"> = (payload) => ({
  payload,
  type: TActionTypes.SET_TRACKS,
});

export const setTrackDetails: TAction<"trackDetails"> = (payload) => ({
  payload,
  type: TActionTypes.SET_TRACK_DETAILS,
});

export const setSearchQuery: TAction<"searchQuery"> = (payload) => ({
  payload,
  type: TActionTypes.SET_SEARCH_QUERY,
});
