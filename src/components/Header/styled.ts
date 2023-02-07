import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  fontSize: rem(1),
}));

export const StyledTopBar = styled("div")(({ theme: { colors, rem } }) => ({
  backgroundColor: colors.black,
  display: "flex",
  justifyContent: "right",
  height: rem(55),
}));

export const StyledUser = styled("div")(({ theme: { rem } }) => ({
  fontSize: rem(1),
}));

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  display: "flex",
  fontSize: rem(1),
}));

export const StyledItem = styled("li")(({ theme: { rem } }) => ({
  fontSize: rem(1),
}));

export const StyledItemImg = styled("div")(({ theme: { rem } }) => ({
  borderRadius: rem(2),
}));
