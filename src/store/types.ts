import React from "react";

import { TTrack } from "~/components/TrackItem/types";

export enum TActionTypes {
  ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES",
  CLEAR_ALL_TRACKS = "CLEAR_ALL_TRACKS",
  DEFAULT = "DEFAULT",
  SET_CURRENT_AUDIO = "SET_CURRENT_AUDIO",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  SET_TRACKS = "SET_TRACKS",
  SET_TRACK_DETAILS = "SET_TRACK_DETAILS",
}

export interface TStore {
  currentAudio: HTMLAudioElement | null;
  favourites: TTrack[];
  searchQuery: string;
  trackDetails: TTrack | null;
  tracks: TTrack[];
}

export interface TAction<P extends keyof TStore = keyof TStore> {
  (payload: P extends keyof TStore ? TStore[P] : P): {
    payload: P extends keyof TStore ? TStore[P] : P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
