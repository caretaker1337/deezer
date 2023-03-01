import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { devices, rem } }) => ({
  marginBottom: rem(30),

  [devices["tablet"]]: {
    display: "none",
  },
}));

export const StyledList = styled("ul")({
  listStyle: "none",
});
