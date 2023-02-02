import { TAction, TActionTypes } from "./types";

import { TTrack } from "~/components/Tracks/Item/types";

export const setTracks: TAction<TTrack[]> = (tracks) => ({
  payload: tracks,
  type: TActionTypes.SET_TRACKS,
});
