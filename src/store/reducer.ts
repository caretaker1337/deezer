import React from "react";

import { TTrack } from "~/components/TrackItem/types";
import { TAction, TActionTypes, TStore } from "./types";

const reducer: React.Reducer<TStore, ReturnType<TAction>> = (
  store,
  { payload, type }
) => {
  const actions: Record<TActionTypes, () => TStore> = {
    [TActionTypes.ADD_TO_FAVOURITES]: () => {
      const track = (<TTrack[]>payload)[0];
      const favourites: TTrack[] = [...store.favourites];

      if (favourites.some(({ id }: TTrack): boolean => id === track.id)) {
        const filteredFavourites: TTrack[] = favourites.filter(
          ({ id }: TTrack): boolean => id !== track.id
        );

        return {
          ...store,
          favourites: filteredFavourites,
        };
      }

      return {
        ...store,
        favourites: [...favourites, track],
      };
    },

    [TActionTypes.CLEAR_ALL_TRACKS]: () => ({
      ...store,
      tracks: [],
    }),

    [TActionTypes.SET_SEARCH_QUERY]: () => ({
      ...store,
      searchQuery: <string>payload,
    }),

    [TActionTypes.SET_CURRENT_AUDIO]: () => ({
      ...store,
      currentAudio: <HTMLAudioElement>payload,
    }),

    [TActionTypes.SET_TRACKS]: () => ({
      ...store,
      tracks: [...store.tracks, ...(<TTrack[]>payload)],
    }),

    [TActionTypes.SET_TRACK_DETAILS]: () => ({
      ...store,
      trackDetails: <TTrack>payload,
    }),

    [TActionTypes.DEFAULT]: () => store,
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
