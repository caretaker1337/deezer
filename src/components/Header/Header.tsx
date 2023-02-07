import React from "react";
import { SvgNotificationIcon } from "~/icons";

import {
  StyledItem,
  StyledItemImg,
  StyledList,
  StyledTopBar,
  StyledUser,
  StyledWrapper,
} from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <StyledTopBar>
      <StyledList>
        <StyledItem>
          <SvgNotificationIcon />
        </StyledItem>

        <StyledItem>
          <StyledItemImg>
            <img
              src="https://e-cdns-images.dzcdn.net/images/user/ed6b02e11f7e832f3810114bf55390c1/32x32-000000-80-0-0.jpg"
              alt="krol"
            />
          </StyledItemImg>
        </StyledItem>
      </StyledList>
    </StyledTopBar>

    <StyledUser>s</StyledUser>
  </StyledWrapper>
);

export { Header };
