import React from "react";

import { Navigation, Options } from "~/components";

import { StyledLogoImg, StyledContent, StyledLogo, StyledLogoLink, StyledSideBar, StyledWrapper } from "./styled";

const Layout: React.FC = () =>

  <StyledWrapper>
    <StyledSideBar>
      <StyledLogo>
        <StyledLogoLink href="/">
          <StyledLogoImg src="images/logo_img.png" alt="logo_img" />
        </StyledLogoLink>
      </StyledLogo>

      <Navigation />
      <Options />
    </StyledSideBar>

    <StyledContent>
      jkbgetbjgktrb
    </StyledContent>
  </StyledWrapper>;

export { Layout };
