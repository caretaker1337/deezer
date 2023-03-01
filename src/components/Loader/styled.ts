import { css, keyframes, styled } from "~/theme";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },

  to: {
    transform: "rotate(360deg)",
  },
});

export const StyledContent = styled("div")<{ isSmall?: boolean | undefined }>(
  ({ isSmall, theme: { colors, rem } }) => ({
    border: `${isSmall ? rem(2) : rem(10)} solid ${colors.red}`,
    borderRadius: "50%",
    borderTopColor: "transparent",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  }),
  css`
    animation: ${spin} 0.5s linear infinite;
  `
);
