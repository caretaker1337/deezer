import { NavLink } from "react-router-dom";

import { styled } from "~/theme";

export const StyledWrapper = styled("div")(
  ({ theme: { colors, devices, rem } }) => ({
    borderBottom: `${rem(1)} solid ${colors.grayLightest}`,
    display: "flex",
    height: rem(60),
    minHeight: rem(60),
    paddingInline: rem(25),

    [devices["tablet"]]: {
      marginBottom: rem(20),
      paddingInline: rem(10),
    },
  })
);

export const StyledToolbar = styled("div")(({ theme: { rem } }) => ({
  alignItems: "center",
  columnGap: rem(15),
  display: "flex",
}));

export const StyledNotification = styled("button")(({ theme: { colors, rem } }) => ({
  alignItems: "center",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  height: rem(19),
  justifyContent: "center",
  marginInline: rem(7),
  transition: "color 0.15s linear",

  ":hover": {
    color: colors.whiteDarkest,
  },
}));

export const StyledUser = styled("a")(({ theme: { rem } }) => ({
  borderRadius: "50%",
  display: "block",
  height: rem(32),
  overflow: "hidden",
  transition: "filter 0.15s linear",
  width: rem(32),

  ":hover": {
    filter: "brightness(150%)",
  },
}));

export const StyledFavourites = styled(NavLink)(
  ({ theme: { colors, fonts, rem } }) => ({
    alignItems: "center",
    color: colors.red,
    display: "flex",
    height: rem(24),
    justifyContent: "center",
    position: "relative",

    "::before": {
      color: "white",
      content: "attr(data-count)",
      fontSize: rem(12),
      fontWeight: fonts.bold,
      left: 0,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: 0,
      textAlign: "center",
    },
  })
);
