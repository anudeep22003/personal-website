import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import RootLayout from "./Layout";

const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
