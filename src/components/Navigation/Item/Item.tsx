import React from "react";

import { TProps } from "./types";

import { StyledIcon, StyledText, StyledWrapper } from "./styled";

const Item: React.FC<TProps>= ({ text, icon }) =>

  <StyledWrapper>
    <StyledIcon>
      {icon}
    </StyledIcon>

    <StyledText>
      {text}
    </StyledText>
  </StyledWrapper>;

export { Item };
