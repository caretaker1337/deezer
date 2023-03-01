import React, {
  CSSProperties,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { AppContext, setTracks, TActionTypes } from "~/store";
import { Loader, TrackItem } from "~/components";
import { TTrack } from "~/components/TrackItem/types";
import { StyledWrapper, StyledLoader, StyledEnd } from "./styled";

const itemsOffset = 30;
const scrollStyle: CSSProperties = {
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollSnapType: "y",
};

const List: React.FC = () => {
  const wrapperElement = useRef<HTMLDivElement>(null);
  const {
    dispatch,
    store: { tracks },
  } = useContext(AppContext);
  const [isLoading, toggleLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setMore] = useState<boolean>(true);

  const getItems = (): void => {
    DZ.api(
      `/playlist/4603455224/tracks?index=${offset}&limit=${itemsOffset}`,
      ({ data, total }: { data: TTrack[]; total: number }) => {
        if (tracks.length >= total) {
          setMore(false);

          return;
        }

        dispatch(setTracks(data));
        setOffset((prevStep: number): number => prevStep + itemsOffset);
        toggleLoading(false);
      }
    );
  };

  useEffect((): VoidFunction => {
    getItems();

    return (): void =>
      dispatch({
        type: TActionTypes.CLEAR_ALL_TRACKS,
        payload: null,
      });
  }, []);

  return (
    <StyledWrapper id="tracks-list" ref={wrapperElement}>
      {wrapperElement.current && tracks && !!tracks.length && (
        <InfiniteScroll
          dataLength={tracks.length}
          endMessage={<StyledEnd>No tracks more.</StyledEnd>}
          height={wrapperElement.current.clientHeight - 1}
          loader={
            <StyledLoader>
              <Loader />
            </StyledLoader>
          }
          next={getItems}
          scrollableTarget="tracks-list"
          style={scrollStyle}
          {...{ hasMore }}
        >
          {tracks.map(
            ({ id, preview, ...rest }: TTrack): React.ReactElement | null =>
              preview && preview.length > 0 ? (
                <TrackItem key={id} {...{ id, preview }} {...rest} />
              ) : null
          )}
        </InfiniteScroll>
      )}

      {isLoading && (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      )}
    </StyledWrapper>
  );
};

export { List };
