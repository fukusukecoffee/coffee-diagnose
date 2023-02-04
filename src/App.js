import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Root from "./routes/root";
import Que from "./routes/que";
import CoffeeQ1 from "./routes/coffee-q1";
import CoffeeQ1_1 from "./routes/coffee-q1_1";
import CoffeeQ1_2 from "./routes/coffee-q1_2";
import CoffeeQ1_3 from "./routes/coffee-q1_3";
import CoffeeQ2 from "./routes/coffee-q2";
import CoffeeQ3 from "./routes/coffee-q3";
import CoffeeQ4 from "./routes/coffee-q4";
import CoffeeQ4_1 from "./routes/coffee-q4_1";
import CoffeeQ4_2 from "./routes/coffee-q4_2";


import Result from "./routes/result";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "que",
    element: <Que />
  },
  {
    path: "coffee-q1",
    element: <CoffeeQ1 />
  },
  {
    path: "coffee-q1_1",
    element: <CoffeeQ1_1 />
  },
  {
    path: "coffee-q1_2",
    element: <CoffeeQ1_2 />
  },
  {
    path: "coffee-q1_3",
    element: <CoffeeQ1_3 />
  },
  {
    path: "coffee-q2",
    element: <CoffeeQ2 />
  },
  {
    path: "coffee-q3",
    element: <CoffeeQ3 />
  },
  {
    path: "coffee-q4_1",
    element: <CoffeeQ4_1 />
  },
  {
    path: "coffee-q4_2",
    element: <CoffeeQ4_2 />
  },
  {
    path: "coffee-q4",
    element: <CoffeeQ4 />
  },
  {
    path: "result",
    element: <Result />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AmplifyProvider>
        <RouterProvider router={router} />
    </AmplifyProvider>
  </React.StrictMode>
);