import React from "react";

import { TProps } from "./types";
import { StyledWrapper, StyledLink } from "./styled";

const Item: React.FC<TProps> = ({ artist, id, title }) => (
  <StyledWrapper>
    <StyledLink to={`track/${id}`}>
      {artist["name"]} - {title}
    </StyledLink>
  </StyledWrapper>
);

export { Item };
