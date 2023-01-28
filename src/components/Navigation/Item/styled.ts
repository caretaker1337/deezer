import { styled } from "~/theme";

export const StyledWrapper = styled("li")(({ theme: { colors, rem } }) => ({
  display: "flex",
  alignItems: "center",
  gap: rem(12),
  color: "white",
  height: rem(24),
  marginBottom: rem(16),
  cursor: "pointer",
  transition: "color 0.2s ease-in",

  ":hover": {
    color: colors.red,
  }
}));

export const StyledIcon = styled("i")(({ theme: { rem } }) => ({
  display: "inline-flex",
  maxWidth: rem(24),
}));

export const StyledText = styled("span")(({ theme: { fonts, rem } }) => ({
  fontWeight: fonts.bold,
  fontSize: rem(18),
  letterSpacing: rem(1),
}));

// export const StyledHints = styled("div")(({ theme: { devices, rem } }) => ({

// }));