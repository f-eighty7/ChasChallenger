import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ErrorRoute } from "./routes/ErrorRoute.tsx";
import { HomeRoute } from "./routes/HomeRoute.tsx";
import { CharactersRoute } from "./routes/CharactersRoute.tsx";
import { NewCharacterRoute } from "./routes/NewCharacterRoute.tsx";
import { AdventureRoute } from "./routes/AdventureRoute.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "/characters",
        element: <CharactersRoute />,
      },
      {
        path: "/characters/new",
        element: <NewCharacterRoute />,
      },
      {
        path: "/adventure",
        element: <AdventureRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
