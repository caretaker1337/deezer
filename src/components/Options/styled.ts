import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices } }) => ({
  [devices["tablet"]]: {
    display: "none",
  },
}));

export const StyledList = styled("ul")(({ theme: { rem } }) => ({
  paddingLeft: rem(45),
}));
