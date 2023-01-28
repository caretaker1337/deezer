import { TTrack, TAction, TActionTypes } from "./types";

export const setTracks: TAction<TTrack[]> = (tracks) => ({
  payload: tracks,
  type: TActionTypes.SET_TRACKS,
});
