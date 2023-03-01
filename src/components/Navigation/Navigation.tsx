import React from "react";

import { SvgBarsIcon, SvgHeartIcon, SvgMicIcon, SvgMusicIcon } from "~/icons";
import { Item } from "./Item";
import { TNavItem } from "./Item/types";
import { StyledList, StyledWrapper } from "./styled";

const items: TNavItem[] = [
  {
    href: "/",
    icon: <SvgMusicIcon />,
    id: "music-menu-item",
    text: "Music",
  },
  {
    href: "/podcasts",
    icon: <SvgMicIcon />,
    id: "podscasts-menu-item",
    text: "Podcasts",
  },
  {
    href: "/explore",
    icon: <SvgBarsIcon />,
    id: "explore-menu-item",
    text: "Explore",
  },
  {
    href: "/favourites",
    icon: <SvgHeartIcon />,
    id: "favourites-menu-item",
    text: "Favourites",
  },
];

const Navigation: React.FC = () => (
  <StyledWrapper>
    {items && !!items.length && (
      <StyledList>
        {items.map(
          ({ id, ...rest }: TNavItem): React.ReactElement => (
            <Item key={id} {...rest} />
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>
);

export { Navigation };
