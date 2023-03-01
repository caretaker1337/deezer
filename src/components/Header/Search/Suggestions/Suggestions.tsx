import React from "react";

import { Item } from "./Item";
import { TProps } from "./types";
import { StyledWrapper } from "./styled";

const Suggestions: React.FC<TProps> = ({ items }) => (
  <StyledWrapper>
    <ul>
      {items.map(
        ({ id, ...rest }): React.ReactElement => (
          <Item key={id} {...{ id }} {...rest} />
        )
      )}
    </ul>
  </StyledWrapper>
);

export { Suggestions };
