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
import { LoginRoute } from "./routes/LoginRoute.tsx";
import { CountinueStoryRoute } from "./routes/CountinueStoryRoute.tsx";
import { StoriesRoute } from "./routes/StoriesRoute.tsx";
import { MastersWelcomeRoute } from "./routes/MastersWelcomeRoute.tsx";
import { SignupRoute } from "./routes/SignupRoute.tsx";
import "./index.css";
import { AuthProvider} from "./context/AuthContext.jsx"

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
        path: "/countinuestory",
        element: <CountinueStoryRoute />,
      },
      {
        path: "/stories",
        element: <StoriesRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </AuthProvider>
  </React.StrictMode>
  
);

