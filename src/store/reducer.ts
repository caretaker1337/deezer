import React from "react";

import { TTrack } from "~/components/Tracks/Item/types";
import { TAction, TActionTypes, TStore } from "./types";

const reducer: React.Reducer<TStore, ReturnType<TAction>> = (
  store,
  { payload, type }
) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.SET_TRACKS]: () => ({
      ...store,
      tracks: payload as TTrack[],
    }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
