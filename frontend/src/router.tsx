import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import RootLayout from "./Layout";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";

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
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
