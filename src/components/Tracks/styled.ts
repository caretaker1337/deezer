import { styled } from "~/theme";

export const StyledTitle = styled("h2")(({ theme: { devices, fonts, rem } }) => ({
  fontSize: rem(22),
  fontWeight: fonts.bold,
  minHeight: rem(42),
  paddingInline: rem(50),

  [devices["tablet"]]: {
    paddingInline: rem(10),
  },
}));
