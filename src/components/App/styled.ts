import { styled } from "~/theme";

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
