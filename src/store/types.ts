import React from "react";

import { TTrack } from "~/components/Tracks/Item/types";

export enum TActionTypes {
  DEFAULT = "DEFAULT",
  SET_TRACKS = "SET_TRACKS",
}

export interface TStore {
  tracks: TTrack[];
}

export interface TAction<P = unknown> {
  (payload: P): {
    payload: P;
    type: TActionTypes;
  };
}

export interface TContext {
  dispatch: React.Dispatch<ReturnType<TAction>>;
  store: TStore;
}
