import { styled } from "~/theme";

export const StyledWrapper = styled("div")({
  flexGrow: 1,
  maxWidth: "100%",
  overflow: "hidden",
  position: "relative",
});

export const StyledLoader = styled("div")(({ theme: { rem } }) => ({
  height: rem(60),
  left: 0,
  marginInline: "auto",
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  width: rem(60),
}));

export const StyledEnd = styled("div")(({ theme: { rem } }) => ({
  height: rem(40),
  lineHeight: rem(40),
  textAlign: "center",
}));
