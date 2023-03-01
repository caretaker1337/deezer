import { styled } from "~/theme";

export const StyledWrapper = styled("li")(({ theme: { colors, rem } }) => ({
  display: "flex",
  alignItems: "center",
  gap: rem(12),
  color: colors.grayLighter,
  height: rem(24),
  marginBottom: rem(16),
  cursor: "pointer",
  transition: "color 0.2s ease-in",

  ":hover": {
    color: colors.red,
  }
}));

export const StyledText = styled("span")(({ theme: { rem } }) => ({
  fontSize: rem(14),
  letterSpacing: rem(1),
}));
