import React from "react";

import { Item } from "./Item";
import { TOptItem } from "./Item/types";
import { StyledList, StyledWrapper } from "./styled";

const items: TOptItem[] = [
  {
    text: "Music",
  },
  {
    text: "Podcasts",
  },
  {
    text: "Explore",
  },
  {
    text: "Favourites",
  },
  {
    text: "Favourites",
  },
];

const Options: React.FC = () =>

  <StyledWrapper>
    {items && !!items.length && (
      <StyledList>
        {items.map(
          ({ text }: TOptItem, index: number): React.ReactElement => (
            <Item key={`nav-item-${index}`} text={text} />
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>;

export { Options };
