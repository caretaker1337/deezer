import { styled } from "~/theme";

export const StyledWrapper = styled("div")({
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  height: "100%",
  position: "relative",
});

export const StyledIcon = styled("i")(({ theme: { colors, rem } }) => ({
  alignItems: "center",
  color: colors.whiteDarker,
  display: "flex",
  height: rem(16),
  justifyContent: "center",
  left: 0,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: rem(16),
}));

export const StyledInput = styled("input")(
  ({ theme: { colors, placeholder, rem } }) => ({
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontFamily: "inherit",
    fontSize: rem(16),
    height: "100%",
    paddingInline: rem(25),
    width: "100%",

    ":focus": {
      outline: "none",

      ...placeholder({
        color: "transparent",
      }),
    },

    ...placeholder({
      color: colors.whiteDarker,
    }),
  })
);

export const StyledLoader = styled("div")(({ theme: { rem } }) => ({
  height: rem(16),
  left: 0,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: rem(16),
}));

export const StyledClear = styled("button")(({ theme: { colors, rem } }) => ({
  alignItems: "center",
  border: "none",
  color: colors.whiteDarker,
  display: "flex",
  height: rem(16),
  justifyContent: "center",
  left: 0,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: rem(16),
}));
