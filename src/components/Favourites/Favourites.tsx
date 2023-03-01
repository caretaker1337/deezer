import React, { useContext } from "react";

import { AppContext } from "~/store";
import { TrackItem } from "~/components";
import { TTrack } from "~/components/TrackItem/types";

const Favourites: React.FC = () => {
  const {
    store: { favourites },
  } = useContext(AppContext);

  return (
    <>
      {favourites && !!favourites.length ? (
        favourites.map(
          ({ id, ...rest }: TTrack): React.ReactElement => (
            <TrackItem key={id} {...{ id }} {...rest} />
          )
        )
      ) : (
        <p style={{ paddingInline: 50 }}>No favourite tracks.</p>
      )}
    </>
  );
};

export { Favourites };
