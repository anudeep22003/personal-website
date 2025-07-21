import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import RootLayout from "./Layout";
import ResumePage from "./pages/Resume";

const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
