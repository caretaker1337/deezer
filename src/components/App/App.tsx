import React from "react";

import { Layout } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />
    <Layout />
  </ThemeProvider>
);

export { App };
