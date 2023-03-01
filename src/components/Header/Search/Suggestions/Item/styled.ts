import { NavLink } from "react-router-dom";

import { styled } from "~/theme";

export const StyledWrapper = styled("li")(({ theme: { rem } }) => ({
  fontSize: rem(15),
  height: rem(40),
  lineHeight: rem(40),
}));

export const StyledLink = styled(NavLink)({
  color: "inherit",
  display: "block",
  height: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
