import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Root from "./routes/root";
import Que from "./routes/que";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "que",
    element: <Que />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AmplifyProvider>
        <RouterProvider router={router} />
    </AmplifyProvider>
  </React.StrictMode>
);