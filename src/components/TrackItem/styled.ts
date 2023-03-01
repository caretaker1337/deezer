import { styled } from "~/theme";

export const StyledWrapper = styled("div")(
  ({ theme: { colors, devices, rem } }) => ({
    alignItems: "center",
    borderBottom: `${rem(1)} solid ${colors.grayLighter}`,
    columnGap: rem(15),
    display: "flex",
    height: rem(40),
    marginInline: rem(50),
    scrollSnapAlign: "start",

    [devices["tablet"]]: {
      fontSize: rem(14),
      marginInline: rem(10),
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    ":last-of-type": {
      borderBottom: "none",
    },
  })
);

export const StyledPlayPause = styled("button")(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.whiteDarkest,
  border: "none",
  borderRadius: "50%",
  color: colors.red,
  height: rem(30),
  minWidth: rem(30),
  paddingInline: rem(7),
  transition: "background-color .1s ease-in",
  width: rem(30),

  ":hover": {
    backgroundColor: colors.whiteDarker,
  },
}));

export const StyledName = styled("div")(({ theme: { colors, rem } }) => ({
  color: colors.whiteDarker,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  fontSize: rem(12),
  height: "100%",
  justifyContent: "center",
  overflow: "hidden",
}));

export const StyledTitle = styled("p")(({ theme: { rem } }) => ({
  color: "white",
  fontSize: rem(14),
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100%",
}));

export const StyledFavourites = styled("button")(({ theme: { colors, rem } }) => ({
  color: colors.red,
  height: rem(22),
}));

export const StyledToastName = styled("span")(({ theme: { fonts } }) => ({
  fontWeight: fonts.bold,
}));
