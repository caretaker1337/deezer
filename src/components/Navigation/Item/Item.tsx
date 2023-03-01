import React from "react";

import { TProps } from "./types";
import { StyledIcon, StyledText, StyledWrapper, StyledLink } from "./styled";

const Item: React.FC<TProps> = ({ href, text, icon }) => (
  <StyledWrapper>
    <StyledLink
      to={href}
    >
      <StyledIcon>{icon}</StyledIcon>
      <StyledText>{text}</StyledText>
    </StyledLink>
  </StyledWrapper>
);

export { Item };
