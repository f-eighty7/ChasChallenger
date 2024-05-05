import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ErrorRoute } from "./routes/ErrorRoute.tsx";
import { HomeRoute } from "./routes/HomeRoute.tsx";
import { AdventureRoute } from "./routes/AdventureRoute.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import { LoginRoute } from "./routes/LoginRoute.tsx";
import { CountinueStoryRoute } from "./routes/CountinueStoryRoute.tsx";
import { StoriesRoute } from "./routes/StoriesRoute.tsx";
import { MastersWelcomeRoute } from "./routes/MastersWelcomeRoute.tsx";
import { SignupRoute } from "./routes/SignupRoute.tsx";
import { CharactersRoute } from "./routes/CharactersRoute.tsx";
import { CreateCharacterRoute } from "./routes/CreateCharacterRoute.tsx";
import { SelectCharacterRoute } from "./routes/SelectCharacterRoute.tsx";
import { WelcomeRoute } from "./routes/WelcomeRoute.jsx";

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
        path: "/welcome",
        element: <MastersWelcomeRoute />,
      },
      {
        path: "/adventure",
        element: <AdventureRoute />,
      },
      {
        path: "/login",
        element: <LoginRoute />,
      },
      {
        path: "/signup",
        element: <SignupRoute />,
      },
      {
        path: "/characters",
        element: <CharactersRoute />,
      },
      {
        path: "/createcharacter",
        element: <CreateCharacterRoute />,
      },
      {
        path: "/selectcharacter",
        element: <SelectCharacterRoute />,
      },
      {
        path: "/countinuestory",
        element: <CountinueStoryRoute />,
      },
      {
        path: "/stories",
        element: <StoriesRoute />,
      },
      {
        path: "/welcome",
        element: <WelcomeRoute />,
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
