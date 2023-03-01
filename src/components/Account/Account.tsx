import React from "react";

import {
  StyledWrapper,
  StyledMedia,
  StyledMediaImage,
  StyledContent,
  StyledName,
  StyledFollowers,
  StyledShuffle,
} from "./styled";

const Account: React.FC = () => (
  <StyledWrapper>
    <StyledMedia>
      <StyledMediaImage alt="Avatar." src="images/logo_img.png" />
    </StyledMedia>

    <StyledContent>
      <StyledName>Username</StyledName>
      <StyledFollowers>0 followers - 0 following</StyledFollowers>
      <StyledShuffle type="button">shuffle my music</StyledShuffle>
    </StyledContent>
  </StyledWrapper>
);

export { Account };
