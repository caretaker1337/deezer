import React, { Suspense, lazy } from "react";

import { Loader, Navigation, Options } from "~/components";
import {
  StyledLogoImg,
  StyledContent,
  StyledLogo,
  StyledLogoLink,
  StyledSideBar,
  StyledWrapper,
} from "./styled";

const Tracks: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/components/Tracks")
);

const Layout: React.FC = () => (
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
      <Suspense fallback={<Loader />}>
        <Tracks />
      </Suspense>
    </StyledContent>
  </StyledWrapper>
);

export { Layout };
