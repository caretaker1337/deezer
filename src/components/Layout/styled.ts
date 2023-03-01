import { NavLink } from "react-router-dom";

import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices } }) => ({
  alignItems: "flex-start",
  height: "100%",
  display: "flex",

  [devices["tablet"]]: {
    flexDirection: "column",
  },
}));

export const StyledSidebar = styled("div")(
  ({ theme: { colors, devices, rem } }) => ({
    backgroundColor: colors.gray,
    borderRight: `${rem(1)} solid ${colors.grayLightest}`,
    height: "100%",
    overflowY: "auto",
    paddingLeft: rem(15),
    width: rem(230),

    [devices["tablet"]]: {
      alignItems: "center",
      borderRight: "none",
      display: "flex",
      height: "auto",
      overflow: "hidden",
      paddingLeft: rem(10),
      width: "100%",
    },
  })
);

export const StyledContent = styled("div")(({ theme: { colors } }) => ({
  alignItems: "stretch",
  backgroundColor: colors.grayDarker,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  height: "100%",
  position: "relative",
  width: "100%",
}));

export const StyledLogo = styled("div")(({ theme: { devices, rem } }) => ({
  height: rem(60),
  marginBottom: rem(30),
  maxWidth: rem(125),
  paddingBlock: rem(5),

  [devices["tablet"]]: {
    marginBottom: 0,
  },
}));

export const StyledLogoImg = styled("img")({
  height: "100%",
});

export const StyledLogoLink = styled(NavLink)({
  display: "block",
  height: "100%",
});

export const StyledLayout = styled("div")({
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "flex-end",
  position: "relative",
});

export const StyledPage = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  overflow: "hidden",
  position: "relative",
});
