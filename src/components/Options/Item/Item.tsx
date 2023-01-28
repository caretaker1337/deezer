import React from "react";

import { TProps } from "./types";

import { StyledText, StyledWrapper } from "./styled";

const Item: React.FC<TProps>= ({ text }) =>

  <StyledWrapper>
    <StyledText>
      {text}
    </StyledText>
  </StyledWrapper>;

export { Item };
