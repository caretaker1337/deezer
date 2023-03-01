import React from "react";
import { useOutlet } from "react-router-dom";

import { Account, Header, Navigation } from "~/components";
import {
  StyledLogoImg,
  StyledContent,
  StyledLogo,
  StyledLogoLink,
  StyledSidebar,
  StyledWrapper,
  StyledLayout,
  StyledPage,
} from "./styled";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <StyledWrapper>
      <StyledSidebar>
        <StyledLogo>
          <StyledLogoLink to="/">
            <StyledLogoImg src="images/logo_img.png" alt="Logo." />
          </StyledLogoLink>
        </StyledLogo>

        <Navigation />
      </StyledSidebar>

      <StyledContent>
        <Header />

        <StyledLayout>
          <Account />
          <StyledPage>{outlet}</StyledPage>
        </StyledLayout>
      </StyledContent>
    </StyledWrapper>
  );
};

export { Layout };
