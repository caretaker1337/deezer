import { styled } from "~/theme";

export const StyledWrapper = styled("div")(({ theme: { rem } }) => ({
  marginBottom: rem(30),
}));

export const StyledList = styled("ul")({
  listStyle: "none",
});

// export const StyledHints = styled("div")(({ theme: { devices, rem } }) => ({

// }));