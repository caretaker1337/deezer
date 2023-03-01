import { styled } from "~/theme";

export const StyledWrapper = styled("div")(
  ({ theme: { colors, devices, rem } }) => ({
    backgroundColor: colors.gray,
    borderRadius: rem(5),
    left: 0,
    minWidth: rem(400),
    paddingInline: rem(12),
    position: "absolute",
    top: rem(65),
    zIndex: 2,

    [devices["tablet"]]: {
      minWidth: 0,
      right: 0,
      width: "100%",
    },
  })
);
