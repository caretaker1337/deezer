import { styled } from "~/theme";

export const StyledWrapper = styled("div")({
  height: "100%",
  display: "flex",
});

export const StyledSideBar = styled("div")(({ theme: { colors, rem } }) => ({
  width: rem(230),
  height: "100%",
  paddingLeft: rem(15),
  backgroundColor: colors.gray,
  overflowY: "auto",
}));

export const StyledContent = styled("div")({
  backgroundColor: "teal",
  flexGrow: 1,
});

export const StyledLogo = styled("div")(({ theme: { rem } }) => ({
  height: rem(60),
  paddingBlock: rem(5),
  marginBottom: rem(30),
  maxWidth: rem(125),
}));

export const StyledLogoImg = styled("img")({
  height: "100%",
});

export const StyledLogoLink = styled("a")({
  display: "block",
  height: "100%",
});

