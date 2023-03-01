import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  alignItems: "center",
  columnGap: rem(35),
  display: "flex",
  height: rem(240),
  padding: `${rem(25)} ${rem(50)}`,

  [devices["tablet"]]: {
    display: "none",
  },
}));

export const StyledMedia = styled("div")(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.gray,
  borderRadius: "50%",
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  width: rem(190),
}));

export const StyledMediaImage = styled("img")({
  height: "100%",
});

export const StyledContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const StyledName = styled("h2")(({ theme: { fonts, rem } }) => ({
  fontSize: rem(32),
  fontWeight: fonts.bold,
  marginBottom: rem(5),
}));

export const StyledFollowers = styled("p")(({ theme: { rem } }) => ({
  marginBottom: rem(15),
}));

export const StyledShuffle = styled("button")(
  ({ theme: { colors, fonts, rem } }) => ({
    backgroundColor: colors.red,
    borderRadius: rem(20),
    color: "white",
    fontSize: rem(15),
    fontWeight: fonts.bold,
    height: rem(40),
    minWidth: rem(220),
    textTransform: "uppercase",
    transition: "background-color 0.15s linear",

    ":hover": {
      backgroundColor: colors.redDarker,
    },
  })
);
