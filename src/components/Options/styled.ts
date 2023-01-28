import { styled } from "~/theme";

export const StyledWrapper = styled("div")({});

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  paddingLeft: rem(45),
}));
