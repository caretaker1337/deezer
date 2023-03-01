import React, { useContext } from "react";

import { AppContext } from "~/store";
import { SvgHeartFilledIcon, SvgNotificationIcon } from "~/icons";
import { Search } from "./Search";
import {
  StyledWrapper,
  StyledToolbar,
  StyledNotification,
  StyledUser,
  StyledFavourites,
} from "./styled";

const Header: React.FC = () => {
  const {
    store: { favourites },
  } = useContext(AppContext);

  const checkFavouritesAdded: boolean = favourites && !!favourites.length;

  return (
    <StyledWrapper>
      <Search />

      <StyledToolbar>
        {checkFavouritesAdded && (
          <StyledFavourites
            data-count={checkFavouritesAdded ? favourites["length"] : ""}
            to="/favourites"
          >
            <SvgHeartFilledIcon />
          </StyledFavourites>
        )}

        <StyledNotification type="button">
          <SvgNotificationIcon />
        </StyledNotification>

        <StyledUser href="#">
          <img alt="User" src="images/user_img.jpg" />
        </StyledUser>
      </StyledToolbar>
    </StyledWrapper>
  );
};

export { Header };
