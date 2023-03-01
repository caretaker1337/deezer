import { NavLink } from "react-router-dom";

import { styled } from "~/theme";

export const StyledWrapper = styled("li")(({ theme: { rem } }) => ({
  height: rem(24),
  marginBottom: rem(16),
}));

export const StyledLink = styled(NavLink)(({ theme: { colors, rem } }) => ({
  alignItems: "center",
  color: "white",
  cursor: "pointer",
  display: "flex",
  gap: rem(12),
  height: "100%",
  textDecoration: "none",
  transition: "color 0.2s ease-in",

  ":hover": {
    color: colors.red,
  },

  "&.active": {
    color: colors.red,
  },
}));

export const StyledIcon = styled("i")(({ theme: { rem } }) => ({
  display: "inline-flex",
  maxWidth: rem(24),
}));

export const StyledText = styled("span")(({ theme: { fonts, rem } }) => ({
  fontSize: rem(18),
  fontWeight: fonts.bold,
  letterSpacing: rem(1),
}));
