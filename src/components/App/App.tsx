import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppProvider } from "~/store";
import { Layout, Loader } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";
import { StyledLoader } from "./styled";

const Favourites: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/components/Favourites")
);

const Tracks: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/components/Tracks")
);

const TrackDetails: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/components/TrackDetails")
);

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <StyledLoader>
                  <Loader />
                </StyledLoader>
              }
            >
              <Tracks />
            </Suspense>
          ),
        },
        {
          element: (
            <Suspense
              fallback={
                <StyledLoader>
                  <Loader />
                </StyledLoader>
              }
            >
              <Favourites />
            </Suspense>
          ),
          path: "favourites",
        },
        {
          element: (
            <Suspense
              fallback={
                <StyledLoader>
                  <Loader />
                </StyledLoader>
              }
            >
              <TrackDetails />
            </Suspense>
          ),
          path: "track/:id",
        },
        {
          element: <div>Not found page</div>,
          path: "*",
        },
      ],
    },
  ]);

  return (
    <AppProvider>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <RouterProvider {...{ router }} />
        <ToastContainer />
      </ThemeProvider>
    </AppProvider>
  );
};

injectStyle();

export { App };
