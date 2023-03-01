import React, { useEffect, useContext } from "react";
import { Await, useParams } from "react-router-dom";

import { AppContext, setTrackDetails } from "~/store";
import { TrackItem } from "~/components";
import { TTrack } from "~/components/TrackItem/types";

const TrackDetails: React.FC = () => {
  const {
    dispatch,
    store: { trackDetails },
  } = useContext(AppContext);
  const { id } = useParams();

  const getTrack = (): void => {
    if (id) {
      DZ.api(`/track/${id}`, (track: TTrack) => {
        dispatch(setTrackDetails(track));
      });
    }
  };

  useEffect((): void => {
    getTrack();
  }, []);

  return (
    <Await resolve={trackDetails}>
      <div>{trackDetails && <TrackItem {...trackDetails} />}</div>
    </Await>
  );
};

export { TrackDetails };
