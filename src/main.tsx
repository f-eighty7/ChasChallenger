import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ErrorRoute } from "./routes/ErrorRoute.tsx";
import { HomeRoute } from "./routes/HomeRoute.tsx";
import { AdventureRoute } from "./routes/AdventureRoute.tsx";
import "./index.css";
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import LoginForm from './components/LoginForm.jsx'
import { CountinueStoryRoute } from "./routes/CountinueStoryRoute.tsx";

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
        path: "/adventure",
        element: <AdventureRoute />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/countinuestory",
        element: <CountinueStoryRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);