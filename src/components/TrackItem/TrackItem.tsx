import React, { useContext, useState } from "react";
import { toast, Slide, ToastOptions } from "react-toastify";

import { AppContext, setCurrentAudio, addToFavourites } from "~/store";
import {
  SvgPlayIcon,
  SvgPauseIcon,
  SvgHeartIcon,
  SvgHeartFilledIcon,
} from "~/icons";
import { TProps, TTrack } from "./types";
import {
  StyledWrapper,
  StyledPlayPause,
  StyledName,
  StyledTitle,
  StyledFavourites,
  StyledToastName,
} from "./styled";

const toastDefaults: ToastOptions = {
  autoClose: 1000,
  closeButton: false,
  hideProgressBar: true,
  icon: false,
  position: "bottom-left",
  theme: "colored",
  transition: Slide,
};

const TrackItem: React.FC<TProps> = (track) => {
  const { artist, duration, id, preview, title } = track;
  const {
    dispatch,
    store: { currentAudio, favourites },
  } = useContext(AppContext);
  const [isPlaying, togglePlaying] = useState<boolean>(false);
  const time = new Date(duration * 1000).toISOString().slice(14, 19);

  const checkFavouritesAdded = favourites.some(
    ({ id: trackId }: TTrack): boolean => trackId === id
  );

  const handlePlayPause = (): void => {
    const audio = new Audio(preview);

    if (currentAudio) {
      currentAudio.pause();
      dispatch(setCurrentAudio(null));
      togglePlaying(false);

      return;
    }

    dispatch(setCurrentAudio(audio));
    audio.play();
    togglePlaying(true);
  };

  const handleFavouriteAdd = (): void => {
    dispatch(addToFavourites([track]));

    if (checkFavouritesAdded) {
      toast(
        <p>
          Track <StyledToastName>{title}</StyledToastName> removed from favourites
        </p>,
        {
          ...toastDefaults,
          type: "error",
        }
      );

      return;
    }

    toast(
      <p>
        Track <StyledToastName>{title}</StyledToastName> added to favourites
      </p>,
      {
        ...toastDefaults,
        type: "default",
      }
    );
  };

  return (
    <StyledWrapper>
      <StyledPlayPause onClick={handlePlayPause} type="button">
        {isPlaying ? <SvgPauseIcon /> : <SvgPlayIcon />}
      </StyledPlayPause>

      <StyledName>
        <StyledTitle>{title}</StyledTitle>
        <p>{artist["name"]}</p>
      </StyledName>

      <p>{time}</p>

      <StyledFavourites onClick={handleFavouriteAdd} type="button">
        {checkFavouritesAdded ? <SvgHeartFilledIcon /> : <SvgHeartIcon />}
      </StyledFavourites>
    </StyledWrapper>
  );
};

export { TrackItem };
