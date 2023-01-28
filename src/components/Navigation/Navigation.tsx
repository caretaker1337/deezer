import React from "react";

import { SvgBarsIcon, SvgHeartIcon, SvgMicIcon, SvgMusicIcon } from "~/icons";
import { Item } from "./Item";
import { TNavItem } from "./Item/types";

import { StyledList, StyledWrapper } from "./styled";

const items: TNavItem[] = [
  {
    text: "Music",
    icon: <SvgMusicIcon />,
  },
  {
    text: "Podcasts",
    icon: <SvgMicIcon />,
  },
  {
    text: "Explore",
    icon: <SvgBarsIcon />,
  },
  {
    text: "Favourites",
    icon: <SvgHeartIcon />,
  },
];

const Navigation: React.FC = () => (
  <StyledWrapper>
    {items && !!items.length && (
      <StyledList>
        {items.map(
          ({ text, icon }: TNavItem, index: number): React.ReactElement => (
            <Item key={`nav-item-${index}`} text={text} icon={icon} />
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>
);

export { Navigation };
